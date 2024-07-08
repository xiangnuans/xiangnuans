"use client";

import Blog from "./blogCard";
import type { Blog as BlogType } from "@/.contentlayer/generated";
import { Card } from "@/components/card";
import { Navigation } from "@/components/nav";

interface Props {
  blogs: BlogType[];
}

export default function BlogList({ blogs }: Props) {
  console.log("ArticlePage", blogs);
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <div className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Blogs
          </div>
          <p className="mt-4 text-zinc-400">
            Documentation of problems encountered at work 👩‍💼, learning 📚, and
            sharing of application techniques
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {blogs
              .filter((_, i) => i % 3 === 0)
              .map((article: BlogType, index: number) => (
                <Card key={index}>
                  <Blog blog={article} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {blogs
              .filter((_, i) => i % 3 === 1)
              .map((article: BlogType, index: number) => (
                <Card key={index}>
                  <Blog blog={article} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {blogs
              .filter((_, i) => i % 3 === 2)
              .map((article: any, index: number) => (
                <Card key={index}>
                  <Blog blog={article} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
