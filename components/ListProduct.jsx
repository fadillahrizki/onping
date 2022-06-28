import Products from "../public/products";
import Product from "./Product";

export default function ListProduct({item}) {
    return (
        <div className='w-full'>
            <div className='my-10 mx-72'>
                <h1 className='text-[20px] my-5'>{item.name}</h1>
                <div className='grid grid-cols-5 gap-8'>
                    {Products.map(product=>product.category_id == item.id ? <Product key={product.id} data={product}/> : '')}
                </div>
            </div>
        </div>
    )
   
}