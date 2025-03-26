"use client";
import { useState } from "react";
import Image from "next/image";

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

    return (
        <div className="flex justify-between mt-10">
        <div className="flex items-center gap-4">
            <Image
            src={testimonials[selected].image}
            alt="customer"
            width={50}
            height={50}
            className="rounded-full"
            />
            <div>
            <h3 className="text-lg font-semibold text-red-600">{testimonials[selected].name}</h3>
            <h4 className="text-sm inline-block">
                {testimonials[selected].role}
            </h4>
            </div>
        </div>

        <div className="flex mt-4 gap-2">
            {testimonials.map((_, index) => (
            <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                selected === index ? "bg-red-500" : "border border-red-500"
                }`}
                onClick={() => setSelected(index)}
            ></button>
            ))}
        </div>
        </div>
    );
};

export default Testimonial;
