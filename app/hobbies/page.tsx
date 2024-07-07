import { Article } from "./article";
import { Navigation } from "@/components/nav";
import { allHobbies } from "@/.contentlayer/generated";

const Hobby = async () => {
  console.log("allHobbies = ", allHobbies);
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Hobbies
          </h2>
          <p className="mt-4 text-zinc-400">
            Continuous learning, lifelong progress, and maintaining a love of
            knowledge and exploration.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {allHobbies
              .filter((_, i) => i % 3 === 0)
              .map((hobby) => (
                <Article hobby={hobby} />
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {allHobbies
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Article hobby={project} />
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {allHobbies
              .filter((_, i) => i % 3 === 2)
              .map((hobby) => (
                <Article hobby={hobby} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
