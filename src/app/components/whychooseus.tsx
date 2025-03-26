import Image from "next/image";

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
            <h2 className="text-2xl md:text-3xl capitalize font-bold mb-6">
                Why People Choose Us?
            </h2>

            <div className="space-y-6">
                {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex gap-5 p-4 rounded-lg shadow-md"
                >
                    <div>
                    <Image
                        src={feature.src}
                        alt={feature.title}
                        width={50}
                        height={50}
                        className="max-w-full h-auto"
                    />
                    </div>
                    <div>
                    <h3 className="font-semibold text-base md:text-lg">
                        {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        {feature.description}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </main>
        </section>
    );
};

export default WhyChooseUs;
