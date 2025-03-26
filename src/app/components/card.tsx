import Image from "next/image";

const QualityCards = () => {
    const items = [
        { src: "/01.png", alt: "ya" },
        { src: "/02.png", alt: "Award" },
        { src: "/03.png", alt: "Rocket" },
        { src: "/04.png", alt: "Food Delivery" },
    ];

    return (
        <section className="bg-gradient-to-b from-[#FFF7E5] to-white py-10">
        <main className="container mx-auto px-4">
        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((item, index) => (
                <div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
                >
                <div className="flex justify-center">
                    <Image src={item.src} alt={item.alt} width={80} height={80} />
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <h2 className="font-bold text-lg capitalize mb-2">Quality Food</h2>
                    <p className="text-gray-600 mb-4">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </p>
                    <a
                    href="#"
                    className={`capitalize font-semibold ${
                        index === 0
                        ? "text-[#F03328] hover:text-black"
                        : "hover:text-[#F03328]"
                    } transition-colors duration-300`}
                    >
                        Learn more
                    </a>
                </div>
                </div>
            ))}
            </div>
        </main>
        </section>
    );
};

export default QualityCards;
