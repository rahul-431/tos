import { productList } from "@/constants";
import ProductCard from "../shared/ProductCard";

const Bifocals = () => {
  return (
    <div className="flex flex-col gap-5 px-4 sm:px-8 md:px-12 lg:px-28 pt-4 pb-14">
      <h2 className="font-extrabold text-2xl text-center">
        Bifocals & Progressives
      </h2>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 justify-center items-center py-2">
        {productList.map((item, index) => (
          <ProductCard
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
      <div className="flex justify-end text-lg">
        <button className="font-semibold underline underline-offset-4 cursor-pointer">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Bifocals;
