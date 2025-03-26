import Image from "next/image";
import Testimonial from "./testimoni";

export default function CustomerFeedback() {
    return (
        <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-white to-[#FFF7E5]">
        <main className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Bagian Teks & Testimonial */}
            <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">
                Customer <span className="text-red-500">Feedback</span>
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
                I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.
            </p>
            <Testimonial />
            </div>

            {/* Bagian Gambar */}
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
