import { projects } from "@/data/projects";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <section className="min-h-[calc(100vh-80px)] pt-24 pb-16 md:pt-48 md:pb-20">
      <div className="mx-auto w-full max-w-5xl px-5">

        <p className="fade-up d200 max-w-2xl text-sm md:text-base leading-relaxed text-gray-500">Selected projects focused on clean and responsive design.</p>

        <Projects data={projects} />
      </div>
    </section>
  );
}
