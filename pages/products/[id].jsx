import Layout from '../../Layout/Layout'
import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import products from "../../public/products"
import Image from 'next/image'
import Link from 'next/link'

export default function Detail() {
    const router = useRouter()
    const [product,setProduct] = useState(null)
    const { id } = router.query
    
    useEffect(()=>{
        setProduct(products.find(p=>p.id==id))
    },[id])
    

    return (
        product ? <Fragment>
            <Layout title={product.name}>
                <div className='w-full'>
                    <div className='mt-10 mx-72'>
                        <div className='flex gap-4 my-5'>
                            <Link href={'/'}> 
                                <a className='text-red-600'>Home</a>
                            </Link>
                            <span>-</span>
                            <span>{product.name}</span>
                        </div>
                        <div className="grid grid-cols-12 gap-12">
                            <div className='col-span-3'>
                                <Image src={product.image} width={500} height={500}/>
                            </div>
                            <div className='col-span-7'>
                                <h2 className='text-xl'>{product.name}</h2>
                                <h1 className='text-2xl font-bold my-3'>Rp. {product.price}</h1>
                                <div className='mt-10'>
                                    <h4 className='text-lg mb-5'>Deskripsi</h4>
                                    <p className='text-sm'>{product.description}</p>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                buttons
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment> : ''
    )
}
