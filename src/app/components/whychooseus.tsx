import Image from "next/image";
import SectionTitle from "./atom/title";
import FeatureList from "./organism/featurelist";

const WhyChooseUs = () => {
    const features = [
        {
            src: "/05.png",
            title: "Convenient and Reliable",
            description:
                "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
        },
        {
            src: "/06.png",
            title: "Variety of Options",
            description:
                "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.",
        },
        {
            src: "/07.png",
            title: "Eat Burger",
            description:
                "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.",
        },
    ];

    return (
        <section className="bg-white py-10">
            <main className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <Image
                        src="/left.png"
                        alt="menu"
                        width={600}
                        height={600}
                        className="max-w-full h-auto"
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <SectionTitle>
                        Why People Choose Us?
                    </SectionTitle>

                    <FeatureList features={features} />
                </div>
            </main>
        </section>
    );
};

export default WhyChooseUs;
