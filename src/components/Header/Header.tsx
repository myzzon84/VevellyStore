import clsx from 'clsx';
import React, { useEffect } from 'react';
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

const Header = () => {
	const { isSearchVisible, toggleSearchVisibility } = useSearchStore();
	const [isShowMenu, setIsShowMenu] = React.useState(false);

	const lang = useSelector(selectLanguage);

	const toggleMenu = () => {
		setIsShowMenu(!isShowMenu);
	};
	const [isShowBasket, setIsShowBasket] = React.useState(false);
	const toggleBasket = () => {
		setIsShowBasket(!isShowBasket);
	};
	return (
		<header className="relative">
			<Topline />
			<Container>
				<div className="flex items-center justify-between py-10">
					<div className="flex items-center gap-2 text-2xl leading-8 text-[#0d0c0c]">
						<span onClick={toggleMenu}>
							<Icon name="menu" />
						</span>
						{t.catalog[lang]}
					</div>
					<div
						className={clsx(
							'header__logo',
							'flex items-center gap-2 text-2xl leading-8 text-[#0d0c0c]'
						)}
					>
						<Link to={'/'}>VEVELLY</Link>
						
					</div>
					<div className="flex items-center justify-between gap-5">
						<div className="flex items-center relative" onClick={toggleSearchVisibility}>
							{isSearchVisible && <Search />}
							<Icon name="search" className="ml-2.5" />
						</div>
						<Icon name="like" badge={1} />
						<div className="flex items-center relative" onClick={toggleBasket}>
							<Icon name="basket" color="none" badge={5} />
						</div>
						<Icon name="person" color="none" />
					</div>
				</div>
			</Container>
			{isShowMenu && (
				<>
					<div className="fixed inset-0 bg-black/10 z-40" onClick={toggleMenu}></div>

					<Container className="absolute top-full left-0 right-0 z-50">
						<div className="w-full flex justify-between bg-white border border-[#D6E8EE]">
							<Menu />
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
		</header>
	);
};

export default Header;
