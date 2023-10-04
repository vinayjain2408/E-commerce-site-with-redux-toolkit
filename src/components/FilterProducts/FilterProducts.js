import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

function FilterProducts() {
  const products = useSelector((state) => state.products.filterProducts);
  console.log("products in filter product", products);
  const { type } = useParams();
  console.log("params", type);

  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-roboto text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>

          <div className="flex items-center justify-between py-8 ">
            <div className="flex items-center">
              {genderButtons.map((Item, index) => {
                return (
                  <div key={index}>
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                      // onClick={() => dispatch(filterGender(Item))}
                    >
                      {Item}
                    </Button>
                  </div>
                );
              })}
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                // onClick={() => dispatch(filterGender(Item))}
              >
                Hight Price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select Color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {
                    colorButtons.map((color,index)=>{
                      return(
                        <MenuItem style={{color:color}} key={index}>{color}</MenuItem>
                      )
                    })
                  }
                 
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                  >
                    Select Size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {
                    sizeButtons.map((size,index)=>{
                      return(
                        <MenuItem key={index}>{size}</MenuItem>
                      )
                    })
                  }
                 
                </MenuList>
              </Menu>
            </div>
            <div className="pr-14">
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                // onClick={() => dispatch(filterProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
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
