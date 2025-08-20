import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Basket } from '../Basket/Basket';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Container } from '../Container/Container';
import Icon from '../Icon';
import { Menu } from '../Menu/Menu';
import { Search } from './Search';
import { header as t } from '../../translations/translations';
import { Link } from 'react-router-dom';
import { headerStore } from '../../store/HeaderStore';
import { catalogStore } from '../../store/CatalogStore';
import { useOnClickOutside } from '../../helpers/clickOutside';
import { translateStore } from '../../store/translateStore';
import useResize from '../../helpers/usePageSize';
import MobileBurgerMenu from '../BurgerMenu/MobileBurgerMenu';

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
	const _width = useResize()[0];

	const lang = translateStore(state => state.lang);

	const searchVisible = headerStore(state => state.searchVisible);
	const setSearchVisible = headerStore(state => state.setSearchVisible);
	const getCategories = catalogStore(state => state.getCategories);
	const categories = catalogStore(state => state.categories);
	const loading = catalogStore(state => state.loading);
	const [isShowCatalog, setIsShowCatalog] = useState(false);
	const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);

	const refSearch = useRef<HTMLDivElement>(null);
	const refBurger = useRef<HTMLDivElement>(null);
	const refBurgerIcon = useRef<HTMLSpanElement>(null);
	const refCatalog = useRef<HTMLDivElement>(null);
	const refCatalogIcon = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setIsShowCatalog(!isShowCatalog);
		setIsShowBurgerMenu(false);
	};
	const [isShowBasket, setIsShowBasket] = useState(false);
	const toggleBasket = () => {
		setIsShowBasket(!isShowBasket);
	};

	useOnClickOutside(refSearch, () => {
		setSearchVisible(false);
	});

	useOnClickOutside(refBurger, e => {
		if (refBurgerIcon.current && refBurgerIcon.current.contains(e.target as Node)) {
			return;
		}
		setIsShowBurgerMenu(false);
	});

	useOnClickOutside(refCatalog, e => {
		if (refCatalogIcon.current && refCatalogIcon.current.contains(e.target as Node)) {
			return;
		}
		setIsShowCatalog(false);
	});

	useEffect(() => {
		getCategories();
	}, []);

	return (
		<header className="relative font-sarabun">
			<Container>
				<div className="flex items-center justify-between py-10 max-w-[1200px] mx-auto max-600px:pt-[10px] max-600px:pb-5 ">
					<div className="flex items-center gap-6 text-[14px]/[1.3] text-[#0d0c0c] max-600px:text-[18px]/[1.3]">
						<div className={` flex items-center gap-6`}>
							<span
								ref={refBurgerIcon}
								className={` flex items-center`}
								onClick={() => {
									setIsShowBurgerMenu(!isShowBurgerMenu);
									setIsShowCatalog(false);
								}}
							>
								<Icon name="menu" />
							</span>
							<span
								ref={refCatalogIcon}
								className={` cursor-pointer`}
								onClick={() => {
									if (!loading) {
										toggleMenu();
									}
								}}
							>
								{_width > 767 && t.catalog[lang]}
							</span>
						</div>
						<a href="#">{_width > 767 && t.women[lang]}</a>
						<a href="#">{_width > 767 && t.men[lang]}</a>
					</div>
					<div
						className={clsx(
							'header__logo',
							'flex items-center gap-2 text-2xl leading-8 text-[#0d0c0c] max-600px:text-[20px]/[1.3]'
						)}
					>
						<Link to={'/'} className={``}>
							<img src="/Main_logo.png" alt="main logo" />
						</Link>
					</div>
					<div className="flex items-center justify-between gap-5">
						<Link to={'/auth'}>
							<Icon
								name="person"
								color="none"
								className={` max-768px:hidden`}
								label={t.account[lang]}
							/>
						</Link>
						<div className="flex items-center relative cursor-pointer" ref={refSearch}>
							{searchVisible && <Search />}
							<Icon
								label={_width > 767 ? t.search[lang] : ''}
								name="search"
								className=""
								setSearchVisible={setSearchVisible}
								searchVisible={searchVisible}
							/>
						</div>
						<div className="flex items-center relative cursor-pointer" onClick={toggleBasket}>
							<Icon name="basket" color="none" badge={5} label={_width > 767 ? t.bag[lang] : ''} />
						</div>
					</div>
				</div>
			</Container>
			{isShowCatalog && (sessionStorage.getItem('categories') || categories) && (
				<div ref={refCatalog}>
					<Container className="absolute top-full left-0 right-0 z-50 !max-w-[1200px] bg-[#EFEFEF] !px-0">
						<div className="w-full flex justify-between bg-[#EFEFEF] border border-[#D6E8EE]">
							<Menu categories={categories} />
							<div className="w-64 p-5">
								<img className="h-40" src="/photo-menu.png" alt="menu-promo" />
								<div className="border-l-[1px]  border-[#018ABE]">
									<div className="h-[34px] text-lg pt-2.5 leading-6 text-[#0d0c0c] relative before:content-[''] before:absolute before:-left-[1px] before:top-8.5 before:w-10 before:h-[1px] before:bg-[#018ABE]">
										<div className="absolute top-5 right-0">{t.sales[lang]}</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</div>
			)}
			{isShowBurgerMenu &&
				(_width > 767 ? (
					<BurgerMenu refBurger={refBurger} />
				) : (
					<MobileBurgerMenu
						setIsShowBurgerMenu={setIsShowBurgerMenu}
						isShowBurgerMenu={isShowBurgerMenu}
					/>
				))}
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
		</header>
	);
};

export default Header;
