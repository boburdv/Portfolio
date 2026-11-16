import Link from "next/link";
import Button from "./ui/Button";
import Social from "./Social";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center">
      <div className="mx-auto w-full max-w-5xl p-4 md:p-5">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-10">
          <img 
            src="/me-sd.jpg" 
            alt="Boburbek" 
            className="fade-up h-28 w-28 md:h-52 md:w-52 rounded-full object-cover shadow-lg" 
          />

          <div className="text-center md:text-left">
            <h1 className="fade-up d200 text-[28px] md:text-[45px] font-extrabold tracking-tight text-[#162232] leading-tight">
              Hi I'm Boburbek
            </h1>

            <h2 className="fade-up d300 mt-1 md:mt-2 text-[18px] md:text-[28px] text-gray-500 lg:md:text-3xl">
              Frontend Developer
            </h2>

            <div className="fade-up d400 mt-4 md:mt-6 flex flex-wrap justify-center gap-2.5 md:gap-4 md:justify-start">
              <Link href="/projects">
                <Button variant="primary">View Projects</Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary">About Me</Button>
              </Link>
            </div>

            <div className="fade-up d500 mt-4 md:mt-8 flex justify-center md:justify-start">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
