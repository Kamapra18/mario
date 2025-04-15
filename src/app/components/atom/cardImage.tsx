import Image from "next/image";

type CardImageProps = {
  src: string;
  alt: string;
};

export default function CardImage({ src, alt }: CardImageProps) {
  return <Image src={src} alt={alt} width={80} height={80} />;
}
