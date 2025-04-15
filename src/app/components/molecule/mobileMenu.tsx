import NavLink from "../atom/navlink";
import BtnLogin from "../atom/btnLogin";

const menuItems = [
  { label: "home", href: "#home", active: true },
  { label: "our menu", href: "#menu" },
  { label: "foods", href: "#food" },
  { label: "about us", href: "#about" },
  { label: "contact us", href: "#contact" },
];

export default function MobileMenu() {
  return (
    <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-[100]">
      {menuItems.map((item) => (
        <NavLink key={item.href} {...item} />
      ))}
      <BtnLogin isMobile />
    </div>
  );
}
