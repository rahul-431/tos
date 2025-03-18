import { featureList } from "@/constants";
import FeatureCard from "../shared/FeatureCard";

const Features = () => {
  return (
    <div
      id="features"
      className="px-4 sm:px-8 md:px-12 lg:px-20 pt-16 md:pt-20 pb-12 bg-gray-100"
    >
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold w-fit text-center mx-auto">
        Features of <span className="textBg font-extrabold">Magnus</span> Lens
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-12">
        {featureList.map((item, index) => (
          <FeatureCard
            key={index}
            color={item.color}
            image={item.image}
            text={item.text}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
