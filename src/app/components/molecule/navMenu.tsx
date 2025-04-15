import NavLink from "../atom/navlink";

const menuItems = [
  { label: "home", href: "#home", active: true },
  { label: "our menu", href: "#menu" },
  { label: "foods", href: "#food" },
  { label: "about us", href: "#about" },
  { label: "contact us", href: "#contact" },
];

export default function NavMenu() {
  return (
    <nav className="hidden md:flex space-x-8">
      {menuItems.map((item) => (
        <NavLink key={item.href} {...item} />
      ))}
    </nav>
  );
}
