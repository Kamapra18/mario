import Image from "next/image";
import Button from "./atom/button";

export default function Hero() {
    return (
        <section
        id="home"
        className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-4 py-8 md:px-20 md:py-16"
        >
        <main className="w-full md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 capitalize pb-3">
                desire{" "}
            <span className="inline-block bg-gradient-to-r from-[#FF9E0C] to-[#D58000] text-white px-4 py-1 rounded-full text-3xl md:text-5xl font-semibold rotate-[-10deg] capitalize">
                food
            </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                for Your Taste
            </h2>

            <p className="text-justify text-gray-600 my-5 md:my-7 leading-relaxed md:leading-loose">
                Food is what we eat to stay alive and healthy. It comes in many
                different forms and flavors, from fruits and vegetables to meats and
                grains.
            </p>

            <Button className="mt-4">Order Now</Button>
        </main>

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
