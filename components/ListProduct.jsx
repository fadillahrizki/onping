import Products from "../public/products";
import Product from "./Product";

export default function ListProduct() {
    return (
         Products.map(product=><Product data={product}/>)
    )
   
}