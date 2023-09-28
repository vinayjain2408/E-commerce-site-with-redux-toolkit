import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";

function FilterProducts() {
  const products = useSelector((state) => state.products.filterProducts);
  console.log("products in filter product", products);
  const { type } = useParams();
  console.log("params", type);
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-roboto text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
        </div>
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12 m-8">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <div key={index} className="w-">
                  <ProductsCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    colors={product.color}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FilterProducts;
