"use client";

import { FaGithub, FaXTwitter } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { navigation } from "./navigation";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const pathname = usePathname(); // 获取路由对象
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  console.log("Starting = ", currentPath);
  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200   ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={` hover:text-zinc-100 transition-colors duration-200 ${
                  currentPath === item.href ? "text-zinc-100" : "text-zinc-400"
                } `}
              >
                {item.isIcon && item.name === "twitter" && (
                  <FaXTwitter size={20} />
                )}
                {item.isIcon && item.name === "github" && (
                  <FaGithub size={20} />
                )}
                {item.name !== "github" && item.name !== "twitter" && item.name}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
