import Image from "next/image";

// Screen area inside the mockup image (1301 x 1081), as percentages so the
// page stays lined up with the laptop at any size (same idea as PhoneVideo).
const SCREEN = {
  left: `${(132 / 1301) * 100}%`,
  top: `${(41 / 1081) * 100}%`,
  width: `${(1038 / 1301) * 100}%`,
  height: `${(649 / 1081) * 100}%`,
};

// A long page screenshot scrolling top to bottom inside the laptop. It's
// stacked twice and moved by half, so the loop has no visible jump.
const LaptopScroll = ({
  mockup,
  mockupWidth,
  mockupHeight,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={mockup}
        alt=""
        width={mockupWidth}
        height={mockupHeight}
        priority
        className="h-auto w-full"
      />

      <div
        className="group absolute overflow-hidden rounded-t-[9px] bg-white select-none [-webkit-touch-callout:none]"
        style={SCREEN}
      >
        <div className="animate-scroll-y flex flex-col group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused] motion-reduce:animate-none">
          {[imageAlt, ""].map((alt, index) => (
            <Image
              key={index}
              src={image}
              alt={alt}
              width={imageWidth}
              height={imageHeight}
              sizes="520px"
              priority
              className="pointer-events-none block h-auto w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaptopScroll;
