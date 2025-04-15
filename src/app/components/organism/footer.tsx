import SectionTitle from "../atom/title";
import NewsletterForm from "../molecule/newsLatter";
import FooterNavColumn from "../molecule/footerNav";

export default function Footer() {
  const navData = [
    {
      title: "Product & Service",
      items: ["Products", "Services", "Appliances", "Storage", "Lifestyle"],
    },
    {
      title: "Shop Now",
      items: [
        "Offers",
        "Promos",
        "Online Shop FAQ",
        "Business Offer",
        "Student Offer",
      ],
    },
    {
      title: "Support",
      items: [
        "Contact",
        "Email Support",
        "Live Chat",
        "Phone Support",
        "Community",
      ],
    },
    {
      title: "Account",
      items: ["My Products", "Orders", "Wishlist", "Service", "Rewards"],
    },
    {
      title: "More",
      items: ["About Us", "Careers", "Brand Guidelines", "Investors", "Legal"],
    },
  ];

  return (
    <footer className="bg-white py-10 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <SectionTitle>
              Join Our <span className="text-[#F03328]">Newsletter</span>
            </SectionTitle>
            <p className="text-gray-600 mt-2">
              Be the first to know about our latest updates, exclusive offers,
              and more.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="h-px my-5 bg-gray-200 w-full" />

        {/* Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-gray-700">
          {navData.map((section, index) => (
            <FooterNavColumn
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        <div className="h-px my-5 bg-gray-200 w-full" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center text-sm text-gray-500 mt-6">
          <div className="flex flex-1 justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <span>English</span>
            <span>Privacy</span>
            <span>Legal</span>
          </div>
          <div className="text-center md:text-right w-full md:w-auto">
            &copy; 2023 Coded. All Rights Reserved. <span>Mario Prayoga</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
