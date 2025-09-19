import Layout from '../components/Layout/Layout';

import Breadcrumbs from '../components/Breadcrumbs';
import { Container } from '../components/Container/Container';
import filterIcon from '../assets/icons/filterIcon.svg';
import arrowDown from '../assets/icons/arrow-down.svg';
import CardProduct from '../components/CardProduct';
import { RotatingLines } from 'react-loader-spinner';
import arrowPagination from '../assets/icons/arrowPagination.svg';
import { FC, useEffect, useRef, useState } from 'react';
import SortBy from '../components/SortBy';
import { useParams } from 'react-router-dom';
import { homePageStore } from '../store/homePageStore';

import Filters from '../components/Filters';
import { SwaggerCartItemType } from '../components/CardSlider';

type PageType = { startIndex: number; endIndex: number };

interface ProductsPageProps {
	products: SwaggerCartItemType[];
	loading: boolean;
}

const ProductsPage: FC<ProductsPageProps> = ({ products, loading }) => {
	const getProductOfCategory = homePageStore(state => state.getProductOfCategory);

	const newArrayOfProducts = [...products, ...products, ...products, ...products, ...products];
	const [page, setPage] = useState(0);
	const [pageArr, setPageArr] = useState<PageType[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	const [showFilters, setShowFilters] = useState(false);
	const [showSort, setShowSort] = useState(false);

	const filtersButtonRef = useRef(null);
	const sortButtonRef = useRef(null);

	const params = useParams();

	console.log(params.categoryName?.split('--')[0]);
	console.log(products);

	useEffect(() => {
		setPage(
			Math.floor(newArrayOfProducts.length / 8) + (newArrayOfProducts.length % 8 > 0 ? 1 : 0)
		);
	}, [products]);

	useEffect(() => {
		if (page) {
			let pages = [];
			for (let index = 0; index < page; index++) {
				if (index === 0) {
					pages.push({ startIndex: 0, endIndex: 8 });
				} else {
					pages.push({ startIndex: index * 8, endIndex: index * 8 + 8 });
				}
			}
			setPageArr(pages);
		}
	}, [page]);

	useEffect(() => {
		if (products.length === 0 && params.categoryName?.split('--')[0] === 'category') {
			getProductOfCategory(Number(params.categoryName.split('--')[1]));
		}
	}, []);

	return (
		<Layout>
			<Container>
				<Breadcrumbs className={` mb-11`} />
				<div className={` flex text-[20px]/[1.3] font-normal justify-between mb-10`}>
					<div className={`  relative `}>
						<div
							className={`flex gap-[10px] items-center cursor-pointer`}
							onClick={() => setShowFilters(!showFilters)}
							ref={filtersButtonRef}
						>
							<img src={filterIcon} alt="filter icon" />
							<span>Filters</span>
						</div>

						{showFilters && products.length > 0 && (
							<Filters setShowFilters={setShowFilters} filtersButtonRef={filtersButtonRef} />
						)}
					</div>
					<div className={` relative`}>
						<div
							className={`flex items-center gap-[10px] cursor-pointer`}
							onClick={() => {
								setShowSort(!showSort);
							}}
							ref={sortButtonRef}
						>
							<span className={` min-w-max`}>Sort by</span>
							<img src={arrowDown} alt="arrow down" className={` w-[14px]`} />
						</div>

						{showSort && products.length > 0 && (
							<SortBy setShowSort={setShowSort} sortButtonRef={sortButtonRef} />
						)}
					</div>
				</div>
				<div className={` flex flex-wrap justify-between`}>
					{products.length > 0 ? (
						newArrayOfProducts
							.slice(pageArr[currentPage - 1]?.startIndex, pageArr[currentPage - 1]?.endIndex)
							.map((card, index) => {
								return <CardProduct card={card} key={index} />;
							})
					) : loading ? (
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
					) : (
						<div className={` text-center w-full text-[30px] py-30`}>Not found</div>
					)}
				</div>
				{products.length > 0 && (
					<div className={` flex w-full justify-center items-center gap-2`}>
						<img
							src={arrowPagination}
							alt="arrow"
							className={` rotate-180 cursor-pointer ${
								currentPage === 1 ? ' opacity-50' : ' opacity-100'
							}`}
							onClick={() => {
								if (currentPage === 1) {
									return;
								}
								setCurrentPage(currentPage => currentPage - 1);
							}}
						/>
						<div className={`flex gap-2 items-center`}>
							{pageArr.map((item, index) => (
								<span
									key={index}
									className={` cursor-pointer ${
										currentPage === index + 1 ? ' font-bold text-[18px]' : ' font-light'
									}`}
									onClick={() => {
										setCurrentPage(index + 1);
									}}
								>
									{index + 1}
								</span>
							))}
						</div>
						<img
							src={arrowPagination}
							alt="arrow"
							className={` ${
								currentPage === pageArr.length ? ' opacity-50' : ' opacity-100'
							} cursor-pointer`}
							onClick={() => {
								if (currentPage === pageArr.length) {
									return;
								}
								setCurrentPage(currentPage => currentPage + 1);
							}}
						/>
					</div>
				)}
			</Container>
		</Layout>
	);
};

export default ProductsPage;
