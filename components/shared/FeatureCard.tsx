import Image from "next/image";

const FeatureCard = ({ title, text, image, color }: FeatureCardType) => {
  return (
    <div
      className={`bg-${color} p-2 rounded-md shadow shadow-gray-400 flex flex-col gap-2 h-48 justify-center items-center`}
    >
      <Image
        src={image}
        alt="card image"
        height={48}
        width={48}
        objectFit="contain"
      />
      <h1 className="text-lg md:text-xl font-bold text-center">{title}</h1>
      <h1 className="text-base md:text-lg font-medium text-center">{text}</h1>
    </div>
  );
};

export default FeatureCard;
