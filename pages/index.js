import Layout from '../Layout/Layout'
import Product from '../components/Product'
import { Fragment } from 'react'

export default function Home( {props} ) {
  return (
    <Fragment>
      <Layout>
        <Product />
      </Layout>
    </Fragment>
  )
}

