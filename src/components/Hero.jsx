"use client";

import Link from "next/link";
import Button from "./ui/Button";
import Social from "./Social";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center">
      <div className="mx-auto w-full max-w-5xl p-5">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          <img src="/me-sd.jpg" alt="Boburbek" className="h-52 w-52 rounded-full object-cover" />

          <div className="text-center md:text-left">
            <h2 className="text-[45px] font-extrabold text-[#162232]">Hi I'm Boburbek</h2>

            <h4 className="mb-5 text-3xl text-gray-500">Frontend Developer</h4>

            <div className="mb-6 flex justify-center gap-4 md:justify-start">
              <Link href="/projects">
                <Button variant="primary">View Projects</Button>
              </Link>

              <Link href="/about">
                <Button variant="secondary">About</Button>
              </Link>
            </div>

            <div className="flex justify-center md:justify-start">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
