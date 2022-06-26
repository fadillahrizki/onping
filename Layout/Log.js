import { Fragment } from "react";
import Head from 'next/head';

export default function Log(){
    return (
        <Fragment>
            
            <header className="w-full ">
                <h1 className="text-[50px] ml-10">ON P!NG</h1>
            </header>  
            <main className="bg-red-600 w-full flex text-white">
                <div className="block ml-20">
                    <h1 className="font-Girassol text-[50px] ">ON P!NG</h1>
                    <h2 className="text-7xl ">Platform Jual-Beli No.331 di Asia</h2>
                </div>
            </main>
        </Fragment>
    )
}