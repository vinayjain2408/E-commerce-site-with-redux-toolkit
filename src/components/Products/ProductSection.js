import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductItem from "./ProductItem";
function ProductSection() {
  return (
    <div>
      <div className="bg-black p-2 w-[50%] mx-auto rounded-md">
        <h2 className="text-red-600 text-center text-lg font-roboto  font-bold tracking-normal leading-normal">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className="grid grid-cols-3 justify-center py-8 gap-4 mx-auto max-w-5xl">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductItem
              id={product.id} 
              img={product.img} 
              name={product.name}
              text = {product.text}
              price={product.price} 
              size={product.size} 
              color={product.color} 
              totalPrice={product.totalPrice}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSection;
