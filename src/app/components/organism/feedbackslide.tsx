"use client";
import { useState } from "react";
import Image from "next/image";

const FeedbackData = [
    {
        name: "Azazzel",
        role: "Food Blogger",
        image: "/user2.jpeg",
        feedback:
        "I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.",
    },
    {
        name: "Tayyab Sohail",
        role: "Food Critic",
        image: "/user.png",
        feedback:
        "My dining experience at your restaurant was truly satisfying. From start to finish, everything felt special. We tried a few appetizers and main courses, and they all tasted fresh and of high quality. The flavors of each component of the dishes were so well-balanced and left a lasting impression. Not only was the food exceptional, but the hospitality and professionalism of the entire staff were also commendable. They were very helpful in providing recommendations and ensuring all our needs were met. This restaurant is truly a culinary gem!",
    },
    {
        name: "Michael Lee",
        role: "Office Employee",
        image: "/user3.png",
        feedback:
        "I was thoroughly impressed with my dining experience at your restaurant last week. The ambiance of the place was so cozy and inviting, perfect for relaxing while enjoying a delicious meal. I ordered the [dish name], and it was absolutely outstanding! The texture was just right, the seasoning was perfectly infused, and the presentation was beautiful. On top of that, the server who attended our table was very attentive and friendly, making our dining experience even more enjoyable. I will definitely be coming back!",
    },
    ];

    const FeedbackSlide = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div>
        {/* Feedback Testimonial yang akan berubah */}
        <p className="mt-4 text-gray-700 leading-relaxed">
            {FeedbackData[selected].feedback}
        </p>

        {/* Bagian Profil dan Navigasi */}
        <div className="flex justify-between mt-10">
            {/* Informasi User */}
            <div className="flex items-center gap-4">
            <Image
                src={FeedbackData[selected].image}
                alt="customer"
                width={50}
                height={50}
                className="rounded-full"
            />
            <div>
                <h3 className="text-lg font-semibold text-red-600">
                {FeedbackData[selected].name}
                </h3>
                <h4 className="text-sm inline-block">
                {FeedbackData[selected].role}
                </h4>
            </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex mt-4 gap-2">
            {FeedbackData.map((_, index) => (
                <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selected === index ? "bg-red-500" : "border border-red-500"
                }`}
                onClick={() => setSelected(index)}
                ></button>
            ))}
            </div>
        </div>
        </div>
    );
};

export default FeedbackSlide;
