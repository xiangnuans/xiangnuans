"use client";

import ArticleList from "@/components/blogList";
import type { Article as ArticleType } from "@/.contentlayer/generated";
import React from "react";
import { allArticles } from "@/.contentlayer/generated";
import { usePathname } from "next/navigation";

type ArticlesPageProps = {
  articles?: ArticleType[];
  article?: ArticleType;
  category?: string;
};

export default function CategoriedPage({
  articles,
  category,
  article,
}: ArticlesPageProps) {
  const pathname = usePathname();
  const categories = pathname.split("/").filter(Boolean).slice(1);
  console.log(">>>", pathname, categories);

  if (!categories) {
    return (
      <div>
        <h1>Articles</h1>
        <p>This is the main articles page.</p>
      </div>
    );
  }

  if (Array.isArray(categories) && categories.length === 1) {
    return (
      <div>
        <h1>Category: {category}</h1>
        <ArticleList articles={articles || []} />
      </div>
    );
  }

  if (Array.isArray(categories) && categories.length === 2) {
    return (
      <div>
        <h1>Article: {article?.title}</h1>
        <div>{article?.author}</div>
      </div>
    );
  }

  return <div>Invalid URL</div>;
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths: { params: { categories: any[] } | { categories: any[] } }[] = [];

//   // Add paths for categories
//   const categories = Array.from(
//     new Set(allArticles.flatMap((article) => article.categories))
//   );
//   categories.forEach((category) => {
//     paths.push({ params: { categories: [category] } });
//   });

//   // Add paths for article slugs
//   allArticles.forEach((article) => {
//     article.categories.forEach((category: any) => {
//       paths.push({ params: { categories: [category, article.slug] } });
//     });
//   });

//   console.log("path = ", paths);

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }: any) => {
//   const { categories } = params;

//   if (!categories) {
//     return {
//       props: {},
//     };
//   }

//   if (Array.isArray(categories) && categories.length === 1) {
//     const category = categories[0];
//     const articles = allArticles.filter((article) =>
//       article.categories.includes(category)
//     );
//     return {
//       props: {
//         category,
//         articles,
//       },
//     };
//   }

//   if (Array.isArray(categories) && categories.length === 2) {
//     const [category, slug] = categories;
//     const article = allArticles.find((article) => article.slug === slug);
//     return {
//       props: {
//         article,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };
