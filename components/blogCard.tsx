"use client";

import type { Blog as BlogType } from "@/.contentlayer/generated";
import { Card } from "@/components/card";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useHydration } from "@/hooks/useHydration";

interface Props {
  blog: BlogType;
  // views: number;
}

export default function Blog({ blog }: Props) {
  const hydrated = useHydration();
  if (!hydrated) {
    return null;
  }
  return (
    <Link key={blog?.slug} href={`/blogs/${blog?.slug}`}>
      <Card>
        <article className="p-4 md:p-8 justify-between flex flex-col">
          {blog?.categories && (
            <div className="flex gap-8 flex-nowrap mb-4">
              {blog?.categories?.map((category: string, index: number) => (
                <Link key={index} href={`/blogs/${category}`}>
                  <span className="text-zinc-100">{category}</span>
                </Link>
              ))}
            </div>
          )}
          <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
            {blog.title}
          </h2>
          {blog?.description?.split("<br>").map((line, index) => (
            <p
              key={index}
              className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200 mb-4"
            >
              {line}
            </p>
          ))}
          <div className="flex gap-2 items-center">
            <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
              {blog.date ? (
                <time dateTime={new Date(blog.date).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    dateStyle: "medium",
                  }).format(new Date(blog.date))}
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
}
