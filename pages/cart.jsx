import { Fragment } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { incrementQuantity,decrementQuantity } from '../redux/cart.slice';
import Link from "next/link";

export default function Cart(){
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    
    let total = 0
    
    cart.forEach(item => {
        total += item.price*item.quantity
    });

    return(
        <Fragment>
            <Header title={"Cart"}/>
            <div className="px-12">
                <h1 className="text-6xl font-bold py-10">KERANJANG</h1>
                <div className="py-12 border-b border-b-slate-600 border-t border-t-slate-600">
                    {cart.length === 0? (
                        <h1>Your Cart Is Empty!</h1>
                    ) : 
                    <>
                    <table className="w-full">
                        {cart.map((item) => (
                            <tr className="w-full">
                                <td className="px-6 py-3 text-left"><Image src={item.image} width={200} height={200}/></td>
                                <td className="px-6 py-3">
                                    <Link href={'/products/'+item.id}>
                                    <a className="hover:text-red-600">{item.name}</a>
                                    </Link>
                                </td>
                                <td className="px-6 py-3">
                                    <div className="flex items-center justify-center gap-4">
                                        <button className="p-2 bg-red-600 text-white rounded-full" onClick={()=>dispatch(decrementQuantity(item))}><FaMinus size={20} /></button>
                                        <h4 className="text-lg font-bold">{item.quantity}</h4>
                                        <button className="p-2 bg-red-600 text-white rounded-full" onClick={()=>dispatch(incrementQuantity(item))}><FaPlus size={20} /></button>
                                    </div>
                                </td>
                                <td className="px-6 py-3 text-center text-right"><b>Rp.{(item.price*item.quantity).toLocaleString("en-US")},-</b></td>
                            </tr>
                        ))}
                    </table>
                    </>}
                </div>
                <h2 className="text-xl font-bold py-10 flex justify-between items-center">
                    <span>Total</span>
                    <span>Rp.{total.toLocaleString("en-US")},-</span>
                </h2>
            </div>
        </Fragment>
    )
}