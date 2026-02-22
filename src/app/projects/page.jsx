import { projects } from "@/data/projects";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <section className="min-h-[calc(100vh-80px)] pt-48 pb-20">
      <div className="mx-auto w-full max-w-5xl px-5">
        <h1 className="text-[45px] font-extrabold text-[#162232]">Projects</h1>

        <p className="mt-3 max-w-2xl leading-relaxed text-gray-500">Selected work — clean UI, responsive layouts, and fast experiences.</p>

        <Projects data={projects} />
      </div>
    </section>
  );
}
