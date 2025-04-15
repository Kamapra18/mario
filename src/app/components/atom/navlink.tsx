type NavLinkProps = {
    href: string;
    label: string;
    active?: boolean;
  };
  
  export default function NavLink({ href, label, active }: NavLinkProps) {
    return (
      <a
        href={href}
        className={`group text-[1.1rem] capitalize ${
          active ? "text-[#F03328]" : "text-[#3a3a3a] hover:text-[#F03328]"
        } font-medium`}
      >
        {label}
        <span
          className={`block w-8 h-0.5 mt-1 mx-auto transition-all duration-300 ${
            active
              ? "bg-[#F03328] opacity-100 scale-x-100 group-hover:scale-x-0 group-hover:opacity-0"
              : "bg-[#F03328] opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
          }`}
        ></span>
      </a>
    );
  }
  