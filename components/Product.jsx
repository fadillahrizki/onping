import Image from 'next/image';
import mikro from '../public/UAS-Assets/mikro.png'
import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';

export default function Product({data}){
    return (
        <div className='cursor-pointer hover:shadow transition duration-300 text-center p-5'>
            <Link href={'/products/'+data.id}>
                <div>
                    <Image src={data.image} width={150} height={150}/>
                    <div>
                        <p>{data.name}</p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-400'>Rp.{data.price},-</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
