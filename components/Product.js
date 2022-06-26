import Image from 'next/image';
import { Fragment } from 'react';
import mikro from '../public/UAS-Assets/mikro.png'


export default function Product({posts}){
    return (
    <Fragment>
        <div className='banner mt-20'>
            <Image src={mikro} className='border' />
        </div>
        <div className='mt-10'>
            <h1 className='text-[20px]'>Elektronik</h1>
            <div>
            </div>
        </div>
    </Fragment>
    )
}
