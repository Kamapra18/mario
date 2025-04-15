import Button from "../atom/button";
import GradientText from "../atom/headGradient";

export default function HeroText() {
  return (
    <main className="w-full md:w-1/2 mt-8 md:mt-0">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 capitalize pb-3">
        desire <GradientText>food</GradientText>
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
  );
}
