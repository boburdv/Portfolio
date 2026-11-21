import Link from "next/link";
import Button from "./ui/Button";
import Social from "./Social";

export default function Hero() {
  return (
    <section className="flex pt-4 pb-8 md:min-h-[calc(100vh-140px)] md:items-center md:justify-center md:py-0">
      <div className="mx-auto w-full max-w-5xl px-5">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:gap-10">
          <img
            src="/me-sd.jpg"
            alt="Boburbek"
            className="h-36 w-36 rounded-full object-cover shadow-lg md:h-52 md:w-52"
          />

          <div className="text-center md:text-left">
            <h1 className="text-[32px] font-extrabold leading-tight tracking-tight text-[#162232] md:text-[45px]">
              Hi, I&apos;m Boburbek
            </h1>

            <h2 className="mt-2 text-[20px] text-gray-500 md:text-[28px] lg:text-3xl">
              Frontend Developer
            </h2>

            <div className="mt-5 flex flex-wrap justify-center gap-3 md:mt-6 md:justify-start md:gap-4">
              <Link href="/projects">
                <Button variant="primary">View Projects</Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary">About Me</Button>
              </Link>
            </div>

            <div className="mt-6 flex justify-center md:mt-8 md:justify-start">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
