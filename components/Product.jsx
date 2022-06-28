import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick'

export default function Product({data}){
    return (
        <div className='cursor-pointer hover:shadow-2xl hover:scale-110 transition duration-300 text-center p-5 mb-10 bg-red-600 rounded-lg'>
            <Link href={'/products/'+data.id}>
                <div>
                    <Image src={data.image} width={150} height={150}/>
                    <div>
                        <p className=''>{data.name}</p>
                    </div>
                    <div>
                        <p className='text-sm text-white text-left'>Rp.{data.price},-</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}