import Layout from '../../Layout/Layout'
import Product from '../../components/Product'
import { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Detail() {
    const router = useRouter()
    const { id } = router.query

    return (
        <Fragment>
            <Layout>
                <div className='w-full flex-col'>
                    <div className='mt-10 mx-72'>
                        <div className="grid grid-cols-12 gap-12">
                            <div className='col-span-3'>
                                image
                            </div>
                            <div className='col-span-7'>
                                <h2 className='text-[30px]'>Poco F2 Pro</h2>
                                <h1 className='text-[32px] font-bold'>Rp. 5,000,000</h1>
                                <div>
                                    <h4>Deskiprsi</h4>
                                    <p className='text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam perspiciatis placeat fugit, at numquam amet voluptate quasi neque ea delectus laudantium consequuntur molestiae, corrupti atque veniam sapiente autem aperiam unde libero sint laboriosam. Atque aperiam, at, minus magnam, sit ipsam labore possimus tempora libero facilis sed saepe officiis? Itaque voluptate dolorem ab ad amet quasi, quaerat id, porro sed in libero fugiat est assumenda nemo, ex recusandae saepe sequi perferendis nam ducimus nihil natus fugit eveniet cupiditate? Dicta ex ipsum quidem vel debitis? Sequi laboriosam exercitationem, tenetur provident autem esse cum, dignissimos modi culpa in ea voluptatum tempore quo ratione.</p>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                buttons
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}
