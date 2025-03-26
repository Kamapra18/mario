import NavbarSection from "./components/navbar";
import Hero from "./components/hero";
import QualityCards from "./components/card";
import WhyChooseUs from "./components/whychooseus";
import MenuSection from "./components/menu";
import CustomerFeedback from "./components/feedback";
import Footer from "./components/footer";

export default function Home() {
  return (
      <div className="relative min-h-screen bg-[#FFF7E5]">
        <div className="absolute inset-0 bg-[#FDE0C3] opacity-1 blur-2xl"></div>
          <div className="relative z-10">
          <NavbarSection/>
          <Hero/>
          <QualityCards/>

          <WhyChooseUs/> 

          <MenuSection/>

          <CustomerFeedback/>
          </div>

          <Footer/>
      </div>

  );
}
