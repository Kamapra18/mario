import NavbarSection from "../organism/navbar";
import Hero from "../organism/hero";
import QualityCards from "../organism/card";
import WhyChooseUs from "../organism/whychooseus";
import MenuSection from "../organism/menu";
import CustomerFeedback from "../organism/feedback";
import Footer from "../organism/footer";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#FFF7E5]">
      <div className="absolute inset-0 bg-[#FDE0C3] opacity-1 blur-2xl"></div>
      <div className="relative z-10">
        <NavbarSection />
        <Hero />
        <QualityCards />

        <WhyChooseUs />

        <MenuSection />

        <CustomerFeedback />
        <Footer />
      </div>
    </div>
  );
}
