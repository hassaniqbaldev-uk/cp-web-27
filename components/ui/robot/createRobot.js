import * as THREE from "three";

const TAU = Math.PI * 2;

const spow = (value, power) => Math.sign(value) * Math.abs(value) ** power;

// Point on a superellipse (a rounded rectangle when n > 2).
const superellipse = (angle, a, b, n) => [
  a * spow(Math.cos(angle), 2 / n),
  b * spow(Math.sin(angle), 2 / n),
];

// Puffy box: a sphere pushed towards a cube, with exact normals (no seams).
const puffyBox = (sx, sy, sz, n = 3) => {
  const geometry = new THREE.SphereGeometry(1, 64, 48);
  const { position, normal } = geometry.attributes;
  const v = new THREE.Vector3();

  for (let i = 0; i < position.count; i++) {
    v.fromBufferAttribute(position, i);

    const r =
      (Math.abs(v.x) ** n + Math.abs(v.y) ** n + Math.abs(v.z) ** n) **
      (-1 / n);

    v.multiplyScalar(r);
    position.setXYZ(i, v.x * sx, v.y * sy, v.z * sz);

    v.set(
      spow(v.x, n - 1) / sx,
      spow(v.y, n - 1) / sy,
      spow(v.z, n - 1) / sz,
    ).normalize();
    normal.setXYZ(i, v.x, v.y, v.z);
  }

  return geometry;
};

// Skins a smooth surface over superellipse rings. Each ring is
// [position along the axis, half width, half height], in increasing order so
// the surface faces outwards.
const loft = (rings, { n = 2.8, axis = "z", steps = 90, segments = 96 }) => {
  const curve = new THREE.CatmullRomCurve3(
    rings.map(([p, a, b]) => new THREE.Vector3(p, a, b)),
    false,
    "centripetal",
  );
  const points = curve.getPoints(steps);
  const positions = [];
  const indices = [];

  for (const { x: p, y: a, z: b } of points) {
    for (let j = 0; j < segments; j++) {
      const [u, v] = superellipse(
        (j / segments) * TAU,
        Math.max(a, 0.001),
        Math.max(b, 0.001),
        n,
      );

      if (axis === "z") positions.push(u, v, p);
      else positions.push(u, p, -v);
    }
  }

  for (let i = 0; i < steps; i++) {
    for (let j = 0; j < segments; j++) {
      const a = i * segments + j;
      const b = i * segments + ((j + 1) % segments);
      const c = a + segments;
      const d = b + segments;

      indices.push(a, b, c, b, d, c);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
};

// Slightly domed face screen with UVs for the canvas texture.
const screenGeometry = (a, b, n, dome) => {
  const rings = 24;
  const segments = 96;
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let i = 0; i <= rings; i++) {
    const r = i / rings;

    for (let j = 0; j < segments; j++) {
      const [x, y] = superellipse((j / segments) * TAU, a * r, b * r, n);

      positions.push(x, y, dome * (1 - r * r));
      uvs.push(x / (2 * a) + 0.5, y / (2 * b) + 0.5);
    }
  }

  for (let i = 0; i < rings; i++) {
    for (let j = 0; j < segments; j++) {
      const p = i * segments + j;
      const q = i * segments + ((j + 1) % segments);

      indices.push(p, p + segments, q, q, p + segments, q + segments);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
};

const createFace = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 693;

  const context = canvas.getContext("2d");
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  let drawn = null;

  // open: 1 = eyes open, 0 = closed.
  const draw = (open) => {
    if (open === drawn) return;
    drawn = open;

    const { width: w, height: h } = canvas;

    context.clearRect(0, 0, w, h);

    const gradient = context.createRadialGradient(
      w / 2,
      h / 2,
      40,
      w / 2,
      h / 2,
      w * 0.6,
    );
    gradient.addColorStop(0, "#15171d");
    gradient.addColorStop(1, "#07080b");
    context.fillStyle = gradient;
    context.fillRect(0, 0, w, h);

    const paint = () => {
      for (const x of [0.25, 0.75]) {
        context.beginPath();
        context.ellipse(
          w * x,
          h * 0.47,
          112,
          Math.max(112 * open, 9),
          0,
          0,
          TAU,
        );
        context.fill();
      }

      context.beginPath();
      context.moveTo(w * 0.23, h * 0.77);
      context.bezierCurveTo(
        w * 0.34,
        h * 0.94,
        w * 0.66,
        h * 0.94,
        w * 0.77,
        h * 0.77,
      );
      context.stroke();
    };

    context.lineCap = "round";
    context.lineWidth = 44;
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#ffffff";

    // Two blurred passes for the blue glow, then a crisp white one.
    for (const [blur, color] of [
      [110, "#1f7fe0"],
      [46, "#4fb9ff"],
      [0, "#000000"],
    ]) {
      context.shadowBlur = blur;
      context.shadowColor = color;
      paint();
      if (blur) paint();
    }

    context.shadowBlur = 0;
    texture.needsUpdate = true;
  };

  draw(1);

  return { texture, draw };
};

export const createRobot = () => {
  const robot = new THREE.Group();

  const white = new THREE.MeshPhysicalMaterial({
    color: "#eceef6",
    roughness: 0.42,
    clearcoat: 0.25,
    clearcoatRoughness: 0.5,
    sheen: 0.4,
    sheenColor: new THREE.Color("#8fb6ff"),
  });
  const blue = new THREE.MeshPhysicalMaterial({
    color: "#2583ea",
    roughness: 0.38,
    clearcoat: 0.3,
    clearcoatRoughness: 0.45,
  });
  const grey = new THREE.MeshStandardMaterial({
    color: "#8e8f9b",
    roughness: 0.42,
    metalness: 0.35,
  });
  const dark = new THREE.MeshStandardMaterial({
    color: "#8f93a8",
    roughness: 0.7,
  });

  const add = (parent, geometry, material, position = [0, 0, 0]) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    parent.add(mesh);

    return mesh;
  };

  // Head: back of the shell, out to the front lip, then in to the recess.
  const head = new THREE.Group();
  robot.add(head);

  add(
    head,
    loft(
      [
        [-2.0, 0, 0],
        [-1.98, 0.85, 0.6],
        [-1.75, 1.7, 1.22],
        [-1.2, 2.3, 1.68],
        [-0.4, 2.62, 1.92],
        [0.4, 2.7, 1.97],
        [1.1, 2.62, 1.9],
        [1.55, 2.44, 1.76],
        [1.78, 2.22, 1.57],
        [1.76, 2.04, 1.4],
        [1.6, 1.94, 1.31],
        [1.4, 1.91, 1.28],
      ],
      { n: 3.3 },
    ),
    white,
  );

  const face = createFace();
  add(
    head,
    screenGeometry(1.95, 1.32, 3.4, 0.1),
    new THREE.MeshPhysicalMaterial({
      color: "#000000",
      emissive: "#ffffff",
      emissiveMap: face.texture,
      roughness: 0.3,
      clearcoat: 0.6,
      clearcoatRoughness: 0.25,
    }),
    [0, 0, 1.5],
  );

  // Seam round the shell, behind the face.
  const seam = new THREE.CatmullRomCurve3(
    Array.from({ length: 96 }, (_, i) => {
      const [x, y] = superellipse((i / 96) * TAU, 2.625, 1.925, 3.3);

      return new THREE.Vector3(x, y, -0.42);
    }),
    true,
  );
  add(head, new THREE.TubeGeometry(seam, 220, 0.022, 8, true), dark);

  for (const side of [-1, 1]) {
    add(head, puffyBox(0.5, 0.76, 0.72, 3.4), blue, [side * 2.72, 0, -0.05]);
  }

  add(head, puffyBox(0.5, 0.17, 0.46, 2.4), blue, [0, 1.98, 0]);
  add(head, new THREE.CylinderGeometry(0.1, 0.13, 0.5, 24), blue, [0, 2.35, 0]);
  add(head, new THREE.SphereGeometry(0.45, 48, 32), blue, [0, 2.88, 0]);

  add(
    robot,
    new THREE.CylinderGeometry(0.75, 0.85, 0.5, 40),
    dark,
    [0, -2.05, -0.1],
  );

  add(
    robot,
    loft(
      [
        [-5.24, 0, 0],
        [-5.22, 0.95, 0.75],
        [-5.1, 1.28, 1.02],
        [-4.75, 1.4, 1.12],
        [-3.9, 1.56, 1.24],
        [-3.0, 1.68, 1.34],
        [-2.45, 1.62, 1.28],
        [-2.18, 1.35, 1.05],
        [-2.1, 0.9, 0.7],
        [-2.08, 0, 0],
      ],
      { n: 2.9, axis: "y" },
    ),
    white,
  );

  const createArm = (side) => {
    const arm = new THREE.Group();
    arm.position.set(side * 1.62, -2.95, -0.15);
    robot.add(arm);

    const path = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.55, 0.08, 0.02),
        new THREE.Vector3(0.98, -0.3, 0.15),
        new THREE.Vector3(1.1, -1.0, 0.45),
      ].map((p) => p.setX(p.x * side)),
    );

    // Three segments with grooves between them.
    add(arm, new THREE.TubeGeometry(path, 48, 0.34, 32), dark);

    // Rounds off the shoulder end inside the body.
    add(
      arm,
      new THREE.SphereGeometry(0.4, 32, 24),
      grey,
      path.getPointAt(0.06).toArray(),
    );

    for (const [from, to] of [
      [0.06, 0.3],
      [0.325, 0.63],
      [0.655, 0.98],
    ]) {
      const part = new THREE.CatmullRomCurve3(
        Array.from({ length: 8 }, (_, i) =>
          path.getPointAt(from + ((to - from) * i) / 7),
        ),
      );
      add(arm, new THREE.TubeGeometry(part, 24, 0.4, 40), grey);

      for (const t of from < 0.1 ? [1] : [0, 1]) {
        const ring = add(
          arm,
          new THREE.TorusGeometry(0.36, 0.04, 12, 40),
          grey,
          part.getPointAt(t).toArray(),
        );
        ring.quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 0, 1),
          part.getTangentAt(t),
        );
        const cap = add(
          arm,
          new THREE.CircleGeometry(0.37, 40),
          dark,
          part.getPointAt(t).toArray(),
        );
        cap.quaternion.copy(ring.quaternion);
      }
    }

    const hand = new THREE.Group();
    hand.position.set(side * 1.1, -1.5, 0.75);
    hand.rotation.set(-0.35, 0, side * -0.12);
    arm.add(hand);

    add(hand, puffyBox(0.78, 0.68, 0.74, 2.7), blue);

    add(hand, puffyBox(0.34, 0.3, 0.34, 2.4), white, [0, -0.68, 0]);

    const claw = new THREE.Group();
    claw.position.set(0, -1.3, 0.05);
    claw.rotation.y = side * 0.35;
    hand.add(claw);

    const arc = 4.5;
    const start = -Math.PI / 2 + (TAU - arc) / 2 - side * 0.3;
    const torus = add(
      claw,
      new THREE.TorusGeometry(0.56, 0.2, 24, 72, arc),
      grey,
    );
    torus.rotation.z = start;
    torus.scale.z = 1.15;

    for (const angle of [start, start + arc]) {
      const tip = add(claw, puffyBox(0.21, 0.13, 0.23, 3), grey, [
        Math.cos(angle) * 0.56,
        Math.sin(angle) * 0.56,
        0,
      ]);
      tip.rotation.z = angle;
    }

    return arm;
  };

  const arms = [createArm(-1), createArm(1)];

  return { robot, head, arms, setEyes: face.draw };
};

export const disposeScene = (scene) => {
  scene.traverse((object) => {
    object.geometry?.dispose();

    for (const material of [object.material].flat()) {
      material?.emissiveMap?.dispose();
      material?.dispose();
    }
  });
};
