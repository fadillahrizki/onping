import { Fragment } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Cart(){
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return(
        <Fragment>
            <Header title={"Cart"}/>
            <div className=" my-12 ml-12 border-b border-b-slate-600 w-11/12">
                <h1 className="text-6xl font-bold pb-10">KERANJANG</h1>
            </div>
            <div className="ml-12">
                {cart.length === 0? (
                    <h1>Your Cart Is Empty!</h1>
                ) : 
                <>
                    <div className="ml-10 grid grid-cols-4 px-5 mb-5 text-[20px] font-bold text-red-600">
                        <div>Produk</div>
                        <div>Nama Produk</div>
                        <div>Harga</div>
                        <div>Kuantitas</div>
                    </div>
                    {cart.map((item) => (
                        <div className="flex border-b border-slate-400 w-11/12">
                            <span className=""><Image src={item.image} width={200} height={200}/></span>
                            <div className='my-auto ml-72 grid grid-cols-3 gap-60 text-xl'>
                                <p>{item.name}</p>
                                <p>Rp.{item.price}</p>
                                <p className="text-lg">{item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </>}
            </div>
        </Fragment>
    )
}