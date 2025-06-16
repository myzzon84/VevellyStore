import { NavLink } from 'react-router-dom';
import { About } from '../components/Home/About';
import { Bestsellers } from '../components/Home/Bestsellers';
import { FullPromo } from '../components/Home/FullPromo';
import { Gift } from '../components/Home/Gift';
import { NewProducts } from '../components/Home/New';
import { Subscribe } from '../components/Home/Subscribe';
import { Watch } from '../components/Home/Watch';
import Layout from '../components/Layout/Layout';

import { Baner } from '../seed/seed';
import { MySlider } from '../components/Home/Slider';
import api from '../api/axios';
import { useEffect } from 'react';
import { homePageStore } from '../store/homePageStore';
import { SwaggerCartItemType } from '../components/CardSlider';

const HomePage = () => {
	const setNewProducts = homePageStore(state => state.setNewProducts);
	const setBestsellersProducts = homePageStore(state => state.setBestsellersProducts);
	const setLoading = homePageStore(state => state.setLoading);

	useEffect(() => {
		setLoading(true);
		api
			.get('all-products')
			.then(res => {
				let result = res.data.results;
				console.log(result);
				let filteredNewRes: [] = result.filter((item: SwaggerCartItemType) => item.statuses.includes('New'));
				let filteredBestsellerRes: [] = result.filter((item: SwaggerCartItemType) => item.statuses.includes('Bestseller'));
				let twoArray: [] = [...filteredNewRes, ...filteredNewRes];
				setNewProducts(twoArray);
				setBestsellersProducts(filteredBestsellerRes);
				setLoading(false);
			})
			.catch(err => {
				setLoading(false);
				console.log(err);
			})
	}, []);

	return (
		<Layout>
			<MySlider banner={Baner} />
			<NewProducts />
			<FullPromo />
			<Bestsellers />
			<Gift />
			<Watch />
			<About />
			<Subscribe />
		</Layout>
	);
};

export default HomePage;
