import Image from "next/image";
import FeedbackData from "./organism/feedbackslide"

export default function CustomerFeedback() {
    return (
        <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-white to-[#FFF7E5]">
        <main className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">
                Customer <span className="text-red-500">Feedback</span>
            </h2>
            <FeedbackData />
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
                src="/chef.png"
                alt="chef"
                width={400}
                height={400}
                className="rounded-lg"
            />
            </div>
        </main>
        </section>
    );
}
