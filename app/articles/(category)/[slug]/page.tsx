import "./mdx.css";

import { Header } from "./header";
import { Mdx } from "@/components/mdx";
// import { Redis } from "@upstash/redis";
// import { ReportView } from "./view";
import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

// const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allArticles
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;

  const article = allArticles.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  // const views =
  //   (await redis.get<number>(["pageviews", "projects", slug].join(":"))) ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={article} />
      {/* <ReportView slug={project.slug} /> */}
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={article?.body?.code} />
      </article>
    </div>
  );
}
