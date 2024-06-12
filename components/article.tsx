import { format, parseISO } from "date-fns";

import { AuthorType } from "./authorCard";
import { CategoryType } from "./category";
// import CategoryLabel from "@/components/blog/category";
import Image from "next/image";
import Link from "next/link";
import { cx } from "@/util/all";
import { urlForImage } from "@/lib/sanity/image";

export type ArticleType = {
  _id: string;
  title: string;
  excerpt?: string;
  mainImage?: {
    blurDataURL: string;
    alt: string;
  };
  slug: {
    current: string;
  };
  author?: AuthorType;
  publishedAt?: string;
  _createdAt?: string;
  categories?: CategoryType[];
  estReadingTime?: number;
};

interface Props {
  article: ArticleType;
  aspect?: string;
  minimal?: boolean;
  pathPrefix?: string;
  preloadImage?: boolean;
  fontSize?: string;
  fontWeight?: string;
}

export default function articleList({
  article,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
}: Props) {
  const imageProps = article?.mainImage ? urlForImage(article.mainImage) : null;
  const AuthorimageProps:
    | { src: string; width: any; height: any }
    | null
    | undefined = article?.author?.image
    ? urlForImage(article.author.image)
    : null;

  return (
    <div
      key={article?._id}
      className={cx(
        "group cursor-pointer",
        minimal && "grid gap-10 md:grid-cols-2"
      )}
    >
      <div
        className={cx(
          " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
        )}
      >
        <Link
          className={cx(
            "relative block",
            aspect === "landscape"
              ? "aspect-video"
              : aspect === "custom"
              ? "aspect-[5/4]"
              : "aspect-square"
          )}
          href={`/article/${pathPrefix ? `${pathPrefix}/` : ""}${
            article.slug.current
          }`}
        >
          {imageProps ? (
            <Image
              src={imageProps.src}
              {...(article.mainImage.blurDataURL && {
                placeholder: "blur",
                blurDataURL: article.mainImage.blurDataURL,
              })}
              alt={article.mainImage.alt || "Thumbnail"}
              priority={preloadImage ? true : false}
              className="object-cover transition-all"
              fill
              sizes="(max-width: 768px) 30vw, 33vw"
            />
          ) : (
            <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
              {/* <PhotoIcon /> */}
            </span>
          )}
        </Link>
      </div>

      <div className={cx(minimal && "flex items-center")}>
        <div>
          {/* <CategoryLabel categories={article.categories} nomargin={minimal} /> */}
          <h2
            className={cx(
              fontSize === "large"
                ? "text-2xl"
                : minimal
                ? "text-3xl"
                : "text-lg",
              fontWeight === "normal"
                ? "line-clamp-2 font-medium  tracking-normal text-black"
                : "font-semibold leading-snug tracking-tight",
              "mt-2    dark:text-white"
            )}
          >
            <Link
              href={`/article/${pathPrefix ? `${pathPrefix}/` : ""}${
                article.slug.current
              }`}
            >
              <span
                className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-purple-800 dark:to-purple-900"
              >
                {article.title}
              </span>
            </Link>
          </h2>

          <div className="hidden">
            {article.excerpt && (
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <Link
                  href={`/article/${pathPrefix ? `${pathPrefix}/` : ""}${
                    article.slug.current
                  }`}
                >
                  {article.excerpt}
                </Link>
              </p>
            )}
          </div>

          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <Link href={`/author/${article?.author?.slug?.current}`}>
              <div className="flex items-center gap-3">
                <div className="relative h-5 w-5 flex-shrink-0">
                  {article?.author?.image && (
                    <Image
                      src={AuthorimageProps?.src || ""}
                      alt={article?.author?.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="20px"
                    />
                  )}
                </div>
                <span className="truncate text-sm">
                  {article?.author?.name}
                </span>
              </div>
            </Link>
            <span className="text-xs text-gray-300 dark:text-gray-600">
              &bull;
            </span>
            <time
              className="truncate text-sm"
              dateTime={article?.publishedAt || article._createdAt}
            >
              {format(
                parseISO(article?.publishedAt || article._createdAt),
                "MMMM dd, yyyy"
              )}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
