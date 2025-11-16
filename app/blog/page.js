import BlogList from "./blogList";
import { client } from "@/app/lib/contentful";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const res = await client.getEntries({ content_type: "blog" });
  const posts = res.items;

  return <BlogList posts={posts} />;
}
