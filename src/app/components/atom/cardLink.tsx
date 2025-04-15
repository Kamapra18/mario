type CardLinkProps = {
  href: string;
  text: string;
  isPrimary?: boolean;
};

export default function CardLink({ href, text, isPrimary }: CardLinkProps) {
  return (
    <a
      href={href}
      className={`capitalize font-semibold ${
        isPrimary ? "text-[#F03328] hover:text-black" : "hover:text-[#F03328]"
      } transition-colors duration-300`}>
      {text}
    </a>
  );
}
