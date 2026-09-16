import { getPosts } from "@/lib/wordpress/queries/posts";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>

          <p>{post.slug}</p>
        </article>
      ))}
    </main>
  );
}
