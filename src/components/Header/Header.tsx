import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useSearchStore } from '../../redux/search/useSearchStore';
import { Basket } from '../Basket/Basket';
import { Container } from '../Container/Container';
import Icon from '../Icon';
import { Menu } from '../Menu/Menu';
import { Search } from './Search';
import { Topline } from './Topline';
import { selectLanguage } from '../../redux/language/selectors';
import { useSelector } from 'react-redux';
import { header as t } from '../../translations/translations';
import { Link } from 'react-router-dom';
import { headerStore } from '../../store/HeaderStore';
import { catalogStore } from '../../store/CatalogStore';
import useResize from '../../helpers/usePageSize';

export type CategoriesType = {
	has_diameter: boolean;
	has_length: boolean;
	has_weight: boolean;
	has_width: boolean;
	id: number;
	name: string;
	slug: string;
	link?: string;
	subcategories: [
		{
			id: number;
			name: string;
			slug: string;
		}
	];
	updated_at: string;
};

const Header = () => {
	// const { isSearchVisible, toggleSearchVisibility } = useSearchStore();

	const searchVisible = headerStore(state => state.searchVisible);
	const setSearchVisible = headerStore(state => state.setSearchVisible);
	const getCategories = catalogStore(state => state.getCategories);
	const categories = catalogStore(state => state.categories);
	const [isShowMenu, setIsShowMenu] = React.useState(false);

	const lang = useSelector(selectLanguage);

	const toggleMenu = () => {
		setIsShowMenu(!isShowMenu);
	};
	const [isShowBasket, setIsShowBasket] = React.useState(false);
	const toggleBasket = () => {
		setIsShowBasket(!isShowBasket);
	};
	const _width = useResize()[0];

	const raw = sessionStorage.getItem('categories');
	let categoriesFromSessionStorage: CategoriesType[] = [];

	if (raw) {
		try {
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed.state.categories)) {
				categoriesFromSessionStorage = parsed.state.categories as CategoriesType[];
			}
		} catch (error) {
			console.error('Помилка при парсингу categories з sessionStorage:', error);
		}
	}

	useEffect(() => {
		if (sessionStorage.getItem('categories')) {
			return;
		}
		getCategories();
	}, []);

	return (
		<header className="relative">
			<Topline />
			<Container>
				<div className="flex items-center justify-between py-10 max-w-[1200px] mx-auto max-600px:pt-[10px] max-600px:pb-5 ">
					<div className="flex items-center gap-2 text-2xl leading-8 text-[#0d0c0c] max-600px:text-[18px]/[1.3]">
						<span onClick={toggleMenu}>
							<Icon name="menu" />
						</span>
						{t.catalog[lang]}
					</div>
					<div
						className={clsx(
							'header__logo',
							'flex items-center gap-2 text-2xl leading-8 text-[#0d0c0c] max-600px:text-[20px]/[1.3]'
						)}
					>
						<Link to={'/'} className={``}>
							VEVELLY
						</Link>
					</div>
					<div className="flex items-center justify-between gap-5">
						<div
							className="flex items-center relative cursor-pointer"
							onClick={() => setSearchVisible(true)}
						>
							{searchVisible && <Search />}
							<Icon name="search" className="ml-2.5" />
						</div>
						<Icon name="like" badge={1} className={` max-469px:hidden`}/>
						<div className="flex items-center relative cursor-pointer" onClick={toggleBasket}>
							<Icon name="basket" color="none" badge={5} />
						</div>
						<Icon name="person" color="none" className={` max-469px:hidden`} />
					</div>
				</div>
			</Container>
			{isShowMenu && (sessionStorage.getItem('categories') || categories) && (
				<>
					<div className="fixed inset-0 bg-black/10 z-40" onClick={toggleMenu}></div>

					<Container className="absolute top-full left-0 right-0 z-50">
						<div className="w-full flex justify-between bg-white border border-[#D6E8EE]">
							<Menu categories={categoriesFromSessionStorage || categories} />
							<div className="w-64 p-5">
								<img className="h-40" src="/photo-menu.png" alt="menu-promo" />
								<div className="border-l-[1px]  border-[#018ABE]">
									<div className="h-[34px] text-lg pt-2.5 leading-6 text-[#0d0c0c] relative before:content-[''] before:absolute before:-left-[1px] before:top-8.5 before:w-20 before:h-[1px] before:bg-[#018ABE]">
										<div className="absolute top-5 right-0">{t.sales[lang]}</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</>
			)}
			<div
				className={clsx(
					'absolute top-40 right-0 z-50 transform transition-transform duration-500',
					isShowBasket ? 'translate-x-0' : 'translate-x-full'
				)}
			>
				<Basket onClose={toggleBasket} />
			</div>
			{isShowBasket && (
				<div className="fixed inset-0 bg-black/10 z-40" onClick={toggleBasket}></div>
			)}
			<div className={` absolute top-0 left-0 px-5 text-[20px]`}>{_width}</div>
		</header>
	);
};

export default Header;
