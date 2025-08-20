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
import { useEffect } from 'react';
import { homePageStore } from '../store/homePageStore';

const HomePage = () => {
	const getAllProducts = homePageStore(state => state.getAllProducts);

	// useEffect(() => {
	// 	getAllProducts();
	// }, []);

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
