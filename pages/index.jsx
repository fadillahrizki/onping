import Layout from '../Layout/Layout'
import { Fragment } from 'react'
import Categories from '../public/categories'
import Image from 'next/image'
import ListProduct from '../components/ListProduct'
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

export default function Home() {
  const allCat = Categories.map(category=><ListProduct  key={category.id} item={category}/>)
  const slides = [
    {
      image : '/../public/UAS-Assets/mikro.png'
    },
    {
      image : '/../public/banner.jpg'
    }
  ]
  return (
    <Fragment>
      <Layout title={'Home'}>
        <Slide>
          {slides.map((slideImage, index) => (
            <div className='each-slide mt-20 mx-96' key={index}>
              <Image src={slideImage.image} width={800} height={400} />
            </div>
          ))}
        </Slide>
        {allCat}
      </Layout>
    </Fragment>
  )
}
