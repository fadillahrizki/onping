import Layout from '../Layout/Layout'
import Product from '../components/Product.jsx'
import { Fragment} from 'react'
import Categories from '../public/categories'
import Image from 'next/image'
import mikro from '../public/UAS-Assets/mikro.png'
import ListProduct from '../components/ListProduct'


export default function Home() {
  const allCat = Categories.map(category=><ListProduct category={category}/>)
  return (
    <Fragment>
      <Layout>
      <div className='banner mt-20 mx-80'>
            <Image src={mikro}  width={1500} height={500} />
        </div>
        <ListProduct/>
      </Layout>
    </Fragment>
  )
}
