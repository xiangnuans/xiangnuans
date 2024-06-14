"use client";

import type { Article as ArticleType } from "@/.contentlayer/generated";
import { Card } from "@/components/card";
import { Eye } from "lucide-react";
import Link from "next/link";

interface Props {
  article: ArticleType;
  // views: number;
}

export const Article: React.FC<Props> = ({ article }: Props) => {
  return (
    <Link key={article?.slug} href={`/articles/${article?.slug}`}>
      <Card>
        <article className="p-4 md:p-8 justify-between flex flex-col">
          {article?.categories && (
            <div className="flex gap-8 flex-nowrap mb-4">
              {article?.categories?.map((category: string) => (
                <Link href={`/articles/${category}`}>
                  <span className="text-zinc-100">{category}</span>
                </Link>
              ))}
            </div>
          )}
          <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
            {article.title}
          </h2>
          <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200 mb-4">
            {article.description}
          </p>
          <div className="flex gap-2 items-center">
            <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
              {article.date ? (
                <time dateTime={new Date(article.date).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    dateStyle: "medium",
                  }).format(new Date(article.date))}
                </time>
              ) : (
                <span>SOON</span>
              )}
            </span>
            <span className="text-zinc-500 text-xs  flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {/* {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)} */}
            </span>
          </div>
        </article>
      </Card>
    </Link>
  );
};
