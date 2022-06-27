import Layout from '../Layout/Layout'
import Product from '../components/Product.jsx'
import { Fragment} from 'react'
import Categories from '../public/categories'
import Image from 'next/image'
import mikro from '../public/UAS-Assets/mikro.png'
import ListProduct from '../components/ListProduct'
import Head from 'next/head'


export default function Home() {
  const allCat = Categories.map(category=><ListProduct  key={category.id} category={category}/>)
  return (
    <Fragment>
      <Layout title={'Home'}>
        <div className='banner mt-20 mx-80'>
            <Image src={mikro}  width={1500} height={500} />
        </div>
        {allCat}
      </Layout>
    </Fragment>
  )
}
