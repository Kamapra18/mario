import Image from "next/image";

type MenuItemProps = {
  src: string;
  name: string;
  price: string;
  rating: number;
};

export default function MenuItem({ src, name, price, rating }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <Image
        src={src}
        alt={name}
        width={150}
        height={150}
        className="mx-auto"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-[#F03328] font-bold">{price}</p>
      <p className="text-yellow-500">⭐ {rating}</p>
    </div>
  );
}
