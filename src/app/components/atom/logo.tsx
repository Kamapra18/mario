import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image src="/logo.png" alt="Foodie logo" width={30} height={20} />
      <a href="#" className="text-[#F03328] font-bold text-2xl ml-2">
        Foo<span className="text-[#FF9E0C]">die</span>
      </a>
    </div>
  );
}
