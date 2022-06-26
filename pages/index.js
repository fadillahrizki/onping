import Layout from '../Layout/Layout'
import Product from '../components/Product'
import Item from '../public/data.json'

export default function Home( {props} ) {
  return (
    <Layout >
        <Product posts = { props.posts }/>
    </Layout>
  )
}

