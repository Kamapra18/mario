import CardImage from "../atom/cardImage";
import CardTitle from "../atom/cardTitle";
import CardLink from "../atom/cardLink";

type QualityCardProps = {
  src: string;
  alt: string;
  isPrimary?: boolean;
};

export default function QualityCard({
  src,
  alt,
  isPrimary = false,
}: QualityCardProps) {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <CardImage src={src} alt={alt} />
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <CardTitle title="Quality Food" />
        <p className="text-gray-600 mb-4">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>
        <CardLink href="#" text="Learn more" isPrimary={isPrimary} />
      </div>
    </div>
  );
}
