import { FaLink } from "react-icons/fa6";
import Link from "next/link";
import { Navigation } from "@/components/nav";
import { ResumeCard } from "@/components/resumeCard";

export default async function Resume() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <section className="pt-20">
        <div className=" px-4 mx-auto md:max-w-4xl">
          <div className=" flex justify-between pb-10 border-b border-line-color">
            <div>
              <div className=" w-36x h-36 border border-solid border-line-color rounded-full flex justify-center items-center">
                <img
                  className=" w-36 h-36 rounded-full"
                  src="https://avatars.githubusercontent.com/u/24558814"
                  alt=""
                />
              </div>
            </div>
            <div className=" w-full max-w-[600px]">
              <div className=" mb-2">
                <h1 className=" text-zinc-100">xiangnuan</h1>
              </div>
              <div className=" mb-2">
                <p className=" text-zinc-300">Full Stack Developer, He/Him</p>
              </div>
              <Link
                className=" mb-6 flex items-center w-fit h-6 text-zinc-100"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/xiangnuans"
              >
                <span className="flex items-center relative mr-3 border-b">
                  xiangnuan
                </span>
                <FaLink />
              </Link>
              <div>
                <p className=" mb-0 text-zinc-300">
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 mx-auto md:max-w-4xl">
          <div className=" mb-8">
            <p className=" leading-6 font-medium text-zinc-100">
              Work Experience
            </p>
          </div>
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2020 - now</p>
            </div>
            <div className=" w-full max-w-[600px] pb-10 border-b border-line-color">
              <h2 className=" text-zinc-100 mb-4">Software Engineer</h2>
              <div>
                <p className=" mb-2 text-zinc-300">
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
                <p className=" mb-2 text-zinc-300">
                  <br />
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 border-b border-line-color mx-auto md:max-w-4xl">
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2020 - now</p>
            </div>
            <div className=" w-full max-w-[600px] pb-10">
              <h2 className=" text-zinc-100 mb-4">Software Engineer</h2>
              <div>
                <p className=" mb-2 text-zinc-300">
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
                <p className=" mb-2 text-zinc-300">
                  <br />
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 border-b border-line-color mx-auto md:max-w-4xl">
          <div className=" mb-8">
            <p className=" leading-6 font-medium text-zinc-100">Projects</p>
          </div>
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2020 - now</p>
            </div>
            <div className=" w-full max-w-[600px] pb-10 justify-between">
              <h2 className=" text-zinc-100 mb-4">
                Principal Software Engineer
              </h2>
              <img src="/" alt="" />
              <p className=" mb-2 text-zinc-300">
                <br />
                Creative and visionary Full Stack Developer with a passion for
                delivering impactful brand experiences. Seeking a challenging
                role in San Francisco to lead and inspire a talented engineering
                team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 border-b border-line-color mx-auto md:max-w-4xl">
          <div className=" mb-8">
            <p className=" leading-6 font-medium text-zinc-100">Education</p>
          </div>
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2020 - now</p>
            </div>
            <div className=" w-full max-w-[600px] pb-10">
              <h2 className=" text-zinc-100 mb-4">
                Principal Software Engineer
              </h2>
              <div>
                <p className=" mb-2 text-zinc-300">
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
                <p className=" mb-2 text-zinc-300">
                  <br />
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 border-b border-line-color mx-auto md:max-w-4xl">
          <div className=" mb-8">
            <p className=" leading-6 font-medium text-zinc-100">Awards</p>
          </div>
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2020 - now</p>
            </div>
            <div className=" w-full max-w-[600px] pb-10">
              <h2 className=" text-zinc-100 mb-4">
                Principal Software Engineer
              </h2>
              <div>
                <p className=" mb-2 text-zinc-300">
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
                <p className=" mb-2 text-zinc-300">
                  <br />
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 border-b border-line-color mx-auto md:max-w-4xl">
          <div className=" mb-8">
            <p className=" leading-6 font-medium text-zinc-100">Code Samples</p>
          </div>
          <div className=" flex justify-between">
            <div className=" whitespace-nowrap">
              <p className=" text-zinc-300">2020 - now</p>
            </div>
            <div className=" w-full max-w-[600px] pb-10">
              <h2 className=" text-zinc-100 mb-4">
                Principal Software Engineer
              </h2>
              <div>
                <p className=" mb-2 text-zinc-300">
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
                <p className=" mb-2 text-zinc-300">
                  <br />
                  Creative and visionary Full Stack Developer with a passion for
                  delivering impactful brand experiences. Seeking a challenging
                  role in San Francisco to lead and inspire a talented
                  engineering team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-4 pt-10 border-b border-line-color mx-auto md:max-w-4xl flex justify-between">
          <div className=" mb-8">
            <p className=" leading-6 font-medium text-zinc-100">Contacts</p>
          </div>
          <div className=" w-full max-w-[600px] pb-10">
            <h2 className=" text-zinc-100 mb-4">Principal Software Engineer</h2>
            <div>
              <p className=" mb-2 text-zinc-300">
                Creative and visionary Full Stack Developer with a passion for
                delivering impactful brand experiences. Seeking a challenging
                role in San Francisco to lead and inspire a talented engineering
                team.
              </p>
              <p className=" mb-2 text-zinc-300">
                <br />
                Creative and visionary Full Stack Developer with a passion for
                delivering impactful brand experiences. Seeking a challenging
                role in San Francisco to lead and inspire a talented engineering
                team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
