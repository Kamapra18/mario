
import Image from "next/image";
import HeroText from "../molecule/heroText";

export default function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-4 py-8 md:px-20 md:py-16">
      <HeroText />
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/right.png"
          alt="hero"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
