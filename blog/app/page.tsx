
import BlogList from "@components/BlogList";
import { client } from "@sanity/lib/client"
import { groq } from "next-sanity"



const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->,
}|order(_createdAt desc)`

export const revalidate = 30;

export default async function HomePage() {
  try {
    const posts = await client.fetch(query);
    return <BlogList posts={posts} />;
  } catch (error) {
    console.error("Error fetching posts:", error);
    // Optionally, you can render an error message or handle the error in another way.
  }
}


