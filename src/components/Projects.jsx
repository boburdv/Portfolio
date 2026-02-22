"use client";

export default function Projects({ data }) {
  return (
    <div className="mt-8 grid gap-8 md:grid-cols-2">
      {data.map(({ id, title, description, tech, github, live }) => (
        <article key={id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="p-6">
            <h3 className="mb-2 text-xl font-semibold text-[#162232]">{title}</h3>

            <p className="mb-4 leading-relaxed text-gray-600">{description}</p>

            <div className="mb-5 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span key={item} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-[#162232]">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-5 text-sm font-medium">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-[#162232]">
                  GitHub ↗
                </a>
              )}

              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-[#162232]">
                  Live Demo ↗
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
