type BtnLoginProps = {
  href?: string;
  isMobile?: boolean;
};

export default function BtnLogin({ href = "#", isMobile = false }: BtnLoginProps) {
  const baseClass =
    "border-2 border-[#F03328] rounded-2xl font-bold capitalize transition-all duration-300 ease-in-out";
  const desktopClass = "px-5 py-1.5 text-sm text-[#F03328] hover:bg-[#F03328] hover:text-white";
  const mobileClass = "px-6 py-2 text-[#F03328] hover:bg-[#F03328] hover:text-white";

  return (
    <a href={href} className={`${baseClass} ${isMobile ? mobileClass : desktopClass}`}>
      login
    </a>
  );
}
