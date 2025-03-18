import { productList } from "@/constants";
import ProductCard from "../shared/ProductCard";

const Products = () => {
  return (
    <div
      id="products"
      className="flex flex-col gap-5 px-4 sm:px-8 md:px-12 lg:px-28 pt-20 pb-14"
    >
      <div className="flex flex-col gap-3 items-center justify-center font-semibold">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl">
          Our <span className="font-extrabold textBg w-fit">Products</span>
        </h1>
      </div>
      <h2 className="font-extrabold text-2xl text-center">Single Vision</h2>
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

export default Products;
