import Layout from '../Layout/Layout'
import Product from '../components/Product'
import { Fragment, useEffect } from 'react'
import data from '../public/data'

export default function Home(props) {
  useEffect(() => {
    console.log(data)
  }, [])
  
  return (
    <Fragment>
      <Layout>
        <Product />
      </Layout>
    </Fragment>
  )
}
