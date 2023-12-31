import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slice/CardSlice";
import { useDispatch } from "react-redux";

function ProductItem({ id, img, name, text, size, price, color, totalPrice }) {
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];
  return (
    <div>
      <Card className="w-80">
        <CardHeader floated={false} className="h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody className="p-4  text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography color="gray" className="font-medium" textGradient>
              Size left: {defaultSize}
            </Typography>
            <Typography color="gray" className="font-medium" textGradient>
              Color:{" "}
              <span
                className="px-2 rounded-full ml-2"
                style={{ backgroundColor:defaultColor }}
              />{" "}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="p-2 flex justify-center ">
          <Tooltip content="Add to Cart" placement="bottom">
            <Button
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
            >
              Add To Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}
export default ProductItem;