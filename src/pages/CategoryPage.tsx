import ProductsPage from "./ProductsPage"
import { homePageStore } from "../store/homePageStore"

const CategoryPage = () => {
  const productsByCategory = homePageStore(state => state.productsByCategory);
  const loadingCategoryProduct = homePageStore(state => state.loadingCategoryProduct);
  console.log(productsByCategory);
  return (
    <ProductsPage products={productsByCategory} loading={loadingCategoryProduct}>
        
    </ProductsPage>
  )
}

export default CategoryPage