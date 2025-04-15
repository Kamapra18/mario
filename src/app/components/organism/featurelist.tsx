// components/organism/FeatureList.tsx
import Image from "next/image";

type Feature = {
  src: string;
  title: string;
  description: string;
};

type FeatureListProps = {
  features: Feature[];
};

const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-5 p-4 rounded-lg shadow-md">
          <div>
            <Image
              src={feature.src}
              alt={feature.title}
              width={50}
              height={50}
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base md:text-lg">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
