import ProductsPage from "./ProductsPage"
import { homePageStore } from "../store/homePageStore"

const AllProductsPage = () => {
const allProducts = homePageStore(state => state.allProducts)
const loading = homePageStore(state => state.loading)
  return (
    <ProductsPage products={allProducts} loading={loading}>

    </ProductsPage>
  )
}

export default AllProductsPage