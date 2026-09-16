import { fetchGraphQL } from "@/lib/wordpress/client";

type Post = {
  id: string;
  title: string;
  slug: string;
  content: string;
};

type PostsResponse = {
  posts: {
    nodes: Post[];
  };
};

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
  const data = await fetchGraphQL<PostsResponse>(GET_POSTS);

  return data.posts.nodes;
}
