import Layout from '../components/Layout/Layout';

import ProductGallery from '../components/ProductCard/ProductGallery';
import { Container } from '../components/Container/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductInfo from '../components/ProductCard/ProductInfo';
import AboutProduct from '../components/ProductCard/AboutProduct/AboutProduct';

import { cards } from '../seed/seed';
import { HomeBlock } from '../components/Home/HomeBlock';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductByIdThunk } from '../redux/product/operations';
import { AppDispatch } from '../redux/store';
import { homePageStore } from '../store/homePageStore';
import { useParams } from 'react-router-dom';

const ProductCardPage = () => {

	const params = useParams();

	const dispatch: AppDispatch = useDispatch();

	const getProduct = (id: number): void => {
		dispatch(getProductByIdThunk(id));
	};

	const allProducts = homePageStore(state => state.allProducts);
	const getAllProducts = homePageStore(state => state.getAllProducts);
	const setSelectedProduct = homePageStore(state => state.setSelectedProduct);
	const selectedProduct = homePageStore(state => state.selectedProduct);

	useEffect(() => {
		getProduct(14);
	}, []);

	useEffect(() => {
		if(allProducts.length === 0){
			getAllProducts();
		}
	},[]);

	useEffect(() => {
		if(!selectedProduct){
			setSelectedProduct(Number(params.productId));
		}
	},[]);

	return (
		<Layout>
			<Container>
				<Breadcrumbs className="mb-11" />
				<div className="flex gap-10 mb-[120px] ">
					<ProductGallery />
					<ProductInfo />
				</div>
				<AboutProduct />

				<div className="mb-[150px]">
					<HomeBlock title="You may also like" cards={allProducts} />
				</div>
			</Container>
		</Layout>
	);
};

export default ProductCardPage;
