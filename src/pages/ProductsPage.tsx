import Layout from '../components/Layout/Layout';

import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { Container } from '../components/Container/Container';
import filterIcon from '../assets/icons/filterIcon.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

const ProductsPage = () => {
	return (
		<Layout>
			<Container>
				<Breadcrumbs className={` mb-11`} />
			</Container>
			<Container>
				<div className={` flex text-[20px]/[1.3] font-normal justify-between cursor-pointer mb-10`}>
					<div className={` flex gap-[10px] items-center `}>
						<img src={filterIcon} alt="filter icon" />
						<span>Filters</span>
					</div>
					<div className={`flex items-center gap-[10px] cursor-pointer`}>
						 <span className={` min-w-max`}>Sort by</span>
						 <img src={arrowDown} alt="arrow down" className={` w-[14px]`} />
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default ProductsPage;
