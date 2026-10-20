import { fetchGraphQL } from "@/lib/wordpress/client";

const GET_POSTS = `
  query GetPosts {
    posts {
      nodes {
        id
        title
        slug
        content
      }
    }
  }
`;

export async function getPosts() {
  const data = await fetchGraphQL(GET_POSTS);

  return data.posts.nodes;
}
