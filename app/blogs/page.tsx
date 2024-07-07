import BlogList from "@/components/blogList";
import { allBlogs } from "@/.contentlayer/generated";

export default async function BlogPage() {
  return <BlogList blogs={allBlogs} />;
}
