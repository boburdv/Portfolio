import Link from "next/link";
import Button from "./ui/Button";
import Social from "./Social";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center py-10 md:py-0">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-12">
          
          {/* Rasm: Mobilda kichikroq, Desktopda 208px */}
          <img 
            src="/me-sd.jpg" 
            alt="Boburbek" 
            className="fade-up h-40 w-40 rounded-full object-cover shadow-lg md:h-52 md:w-52" 
          />

          <div className="text-center md:text-left">
            {/* Sarlavha: Mobilda 30px (3xl), Desktopda 45px */}
            <h2 className="fade-up d200 text-3xl font-extrabold tracking-tight text-[#162232] md:text-[45px] leading-tight">
              Hi I'm Boburbek
            </h2>

            {/* Subtitle: Mobilda xl (20px), Desktopda 3xl (30px) */}
            <h4 className="fade-up d300 mb-6 text-xl text-gray-500 md:text-3xl">
              Frontend Developer
            </h4>

            {/* Tugmalar: Mobilda biroz kichikroq gap */}
            <div className="fade-up d400 mb-8 flex flex-wrap justify-center gap-3 md:justify-start md:gap-4">
              <Link href="/projects">
                <Button variant="primary">View Projects</Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary">About</Button>
              </Link>
            </div>

            <div className="fade-up d500 flex justify-center md:justify-start">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
