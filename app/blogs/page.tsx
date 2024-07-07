import ArticleList from "@/components/blogList";
import { allBlogs } from "@/.contentlayer/generated";

export default async function ArticlePage() {
  return <ArticleList blogs={allBlogs} />;
}
