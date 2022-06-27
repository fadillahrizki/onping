import Image from 'next/image';
import mikro from '../public/UAS-Assets/mikro.png'
import { useState, useEffect, Fragment } from 'react';
import data from '../public/data.js'

export default function Product(){
    let allProduct = data.map((item) => {
        return (
            <div className='block'>
                <Image src={item.image} width={150} height={150}/>
                <div>
                    <p>{item.name}</p>
                </div>
                <div>
                    <p className='text-sm text-gray-400'>Rp.{item.price},-</p>
                </div>
            </div>
        )
    })
    return (
    <div className='w-full flex-col '>
        <div className='banner mt-20 mx-80'>
            <Image src={mikro}  width={1500} height={500} />
        </div>
        <div className='mt-10 mx-72'>
            <h1 className='text-[20px]'>Elektronik</h1>
            <div className='grid grid-cols-5 w-full'>
                {allProduct}
            </div>
        </div>
    </div>
    )
}
