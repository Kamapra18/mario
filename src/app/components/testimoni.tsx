"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const testimonials = [
    {
        name: "Azazzel",
        role: "Product Manager",
        image: "/user2.jpeg",
    },
    {
        name: "Tayyab Sohail",
        role: "UX/UI Designer",
        image: "/user.png",
    },
    {
        name: "Mario Prayoga",
        role: "Software Engineer",
        image: "/mario23.jpg",
    },
    ];

    const Testimonial = () => {
    const [selected, setSelected] = useState(0);

    // Auto slide every 3s on small screen
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (!isMobile) return;

        const interval = setInterval(() => {
        setSelected((prev) => (prev + 1) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Gesture swipe (optional)
    const handlers = useSwipeable({
        onSwipedLeft: () =>
        setSelected((prev) => (prev + 1) % testimonials.length),
        onSwipedRight: () =>
        setSelected((prev) => (prev - 1 + testimonials.length) % testimonials.length),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div
        {...handlers}
        className="flex justify-between items-center mt-10 md:flex-row"
        >
        <div className="flex items-center gap-4">
            <Image
            src={testimonials[selected].image}
            alt="customer"
            width={50}
            height={50}
            className="rounded-full"
            />
            <div>
            <h3 className="text-lg font-semibold text-red-600">
                {testimonials[selected].name}
            </h3>
            <h4 className="text-sm inline-block">
                {testimonials[selected].role}
            </h4>
            </div>
        </div>

        <div className="flex mt-4 md:mt-0 gap-2">
            {testimonials.map((_, index) => (
            <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selected === index
                    ? "bg-red-500"
                    : "border border-red-500"
                }`}
                onClick={() => setSelected(index)}
            ></button>
            ))}
        </div>
        </div>
    );
};

export default Testimonial;
