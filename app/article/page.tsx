import { Card } from "@/components/card";
import Link from "next/link";
import { Navigation } from "@/components/nav";
import PostList from "@/components/articleList";

const posts: never[] = [];

export default async function Article() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Article
          </h2>
          <p className="mt-4 text-zinc-400">
            工作中遇到的问题记录、学习、应用技术分享
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {posts && (
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
            {posts.slice(0, 2).map((post) => (
              <PostList post={post} aspect="landscape" preloadImage={true} />
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/blog`}>
              <article className="relative w-full h-full p-4 md:p-10">
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}
