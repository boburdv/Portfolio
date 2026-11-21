import Link from "next/link";
import Button from "./ui/Button";
import Social from "./Social";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-140px)] items-center justify-center py-4 md:py-0">
      <div className="mx-auto w-full max-w-5xl p-5">
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:gap-10">
          <img
            src="/me-sd.jpg"
            alt="Boburbek"
            className="fade-up h-28 w-28 sm:h-32 sm:w-32 md:h-52 md:w-52 rounded-full object-cover shadow-lg"
          />

          <div className="text-center md:text-left">
            <h1 className="fade-up d200 text-[30px] sm:text-[32px] md:text-[45px] font-extrabold tracking-tight text-[#162232] leading-tight">
              Hi I&apos;m Boburbek
            </h1>

            <h2 className="fade-up d300 mt-1.5 sm:mt-2 text-[18px] sm:text-[20px] md:text-3xl text-gray-500">
              Frontend Developer
            </h2>

            <div className="fade-up d400 mt-4 sm:mt-5 md:mt-6 flex flex-wrap justify-center gap-3 sm:gap-3.5 md:gap-4 md:justify-start">
              <Link href="/projects">
                <Button variant="primary">View Projects</Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary">About Me</Button>
              </Link>
            </div>

            <div className="fade-up d500 mt-5 sm:mt-6 md:mt-8 flex justify-center md:justify-start">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
