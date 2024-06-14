import ArticleList from "@/components/articleList";
import { allArticles } from "@/.contentlayer/generated";

export default async function ArticlePage() {
  console.log("ArticlePage", allArticles);
  return <ArticleList articles={allArticles} />;
}
