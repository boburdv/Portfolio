"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "TypeScript", "Git"];

export default function About() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center">
      <div className="mx-auto w-full max-w-5xl p-5">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          <img src="/me-sd.jpg" alt="Boburbek" className="fade-up h-52 w-52 rounded-full object-cover" />

          <div className="text-center md:text-left">
            <h1 className="fade-up d200 text-[45px] font-extrabold text-[#162232]">About me</h1>

            <p className="fade-up d300 mt-2 max-w-2xl text-lg text-gray-500">I build modern web applications with a focus on performance, structure, and usability.</p>

            <div className="fade-up d400 mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-[#162232]">
                  {skill}
                </span>
              ))}
            </div>

            <div className="fade-up d500 mt-6 flex justify-center gap-4 md:justify-start">
              <Link href="/cv.pdf" target="_blank">
                <Button variant="primary">View Resume</Button>
              </Link>

              <Link href="/projects">
                <Button variant="secondary">Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
