import Label from "@/components/label";
import Link from "next/link";

export interface CategoryType {
  slug: {
    current: string;
  };
  color: string;
  title: string;
}

interface Props {
  categories: CategoryType[];
  nomargin?: boolean;
}

export default function CategoryLabel({ categories, nomargin = false }: Props) {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category: CategoryType, index) => (
          <Link href={`/category/${category.slug.current}`} key={index}>
            <Label nomargin={nomargin} color={category.color}>
              {category.title}
            </Label>
          </Link>
        ))}
    </div>
  );
}
