import BlogList from "@/components/blogList";
import Particles from "@/components/particles";
import { allBlogs } from "@/.contentlayer/generated";

export default async function BlogPage() {
  return (
    <div>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <BlogList blogs={allBlogs} />
    </div>
  );
}
