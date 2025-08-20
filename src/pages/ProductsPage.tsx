import Layout from '../components/Layout/Layout';

import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { Container } from '../components/Container/Container';
import filterIcon from '../assets/icons/filterIcon.svg';
import arrowDown from '../assets/icons/arrow-down.svg';
import { homePageStore } from '../store/homePageStore';
import CardProduct from '../components/CardProduct';
import { RotatingLines } from 'react-loader-spinner';
import arrowPagination from '../assets/icons/arrowPagination.svg';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
	const allProducts = homePageStore(state => state.allProducts);
	const newArrayOfProducts = [...allProducts, ...allProducts, ...allProducts];
	const [page, setPage] = useState(0);
	const [pageArr, setPageArr] = useState<number[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		setPage(
			Math.floor(newArrayOfProducts.length / 8) + (newArrayOfProducts.length % 8 > 0 ? 1 : 0)
		);
	}, [allProducts]);

	useEffect(() => {
		if (page) {
			let pages: number[] = [];
			for (let index = 0; index < page; index++) {
				pages.push(index + 1);
			}
			setPageArr(pages);
		}
	}, [page]);

	useEffect(() => {

	},[currentPage]);

	return (
		<Layout>
			<Container>
				<Breadcrumbs className={` mb-11`} />
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
				<div className={` flex flex-wrap justify-between`}>
					{allProducts.length > 0 ? (
						newArrayOfProducts.slice(0, 8).map((card, index) => {
							return <CardProduct card={card} key={index} />;
						})
					) : (
						<div className={` flex justify-center w-full`}>
							<RotatingLines
								visible={true}
								width="200"
								strokeColor="#018ABE"
								strokeWidth="3"
								animationDuration="0.75"
								ariaLabel="rotating-lines-loading"
							/>
						</div>
					)}
				</div>
				<div className={` flex w-full justify-center items-center gap-2`}>
					<img src={arrowPagination} alt="arrow" className={` rotate-180`} />
					<div className={`flex gap-2`}>
						{pageArr.map((item, index) => (
							<span key={index} className={` cursor-pointer`}>{item}</span>
						))}
					</div>
					<img src={arrowPagination} alt="arrow" />
				</div>
			</Container>
		</Layout>
	);
};

export default ProductsPage;
