import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import {singleProduct} from "../../features/slice/ProductSlice"
import { Link, useParams } from "react-router-dom";

function ProductsCard({ id, name, img, text, price, colors }) {
  const {type} = useParams()
    const dispatch = useDispatch()
  return (
    <Link to={`/filterProducts/${type}/`+id}>
    <Card className=" w-95 m-3" onClick={() => dispatch(singleProduct(id))}>
      <CardHeader color="blue" className="relative h-96">
        <img src={img} alt="card-image" className="h-full w-full" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography>{price}$</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
         {colors.map((color , index)=>{
            return(
                <i className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4"
                key={index}
                style={{backgroundColor : color}}
                ></i>
            )
         })}
        </Typography>
      </CardFooter>
    </Card>
    </Link>
  );
}

export default ProductsCard;
