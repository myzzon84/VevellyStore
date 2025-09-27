import clsx from 'clsx';
import React, { useState } from 'react';
import { MenuItem } from './MenuItem';
import { CategoriesType } from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import { homePageStore } from '../../store/homePageStore';
import { headerStore } from '../../store/HeaderStore';
import { catalogStore } from '../../store/CatalogStore';


interface Props {
	className?: string;
	categories: CategoriesType[];
}

export const Menu: React.FC<Props> = ({ className, categories }) => {
	const setIsShowCatalog = headerStore(state => state.setIsShowCatalog);
	const getProductOfCategory = homePageStore(state => state.getProductOfCategory);
	const isOpenSubmenu = catalogStore(state => state.isOpenSubmenu);
	const setIsOpenSubmenu = catalogStore(state => state.setIsOpenSubmenu);
	const navigate = useNavigate();
	const [firstClickCategory, setFirstClickCategory] = useState(false);

	const toggleSubmenu = (index: number) => {
		setIsOpenSubmenu(isOpenSubmenu === index ? null : index);
	};

	return (
		<>
			<div
				className={clsx(
					'w-max h-auto flex flex-col gap-2.5 p-10 border-r-[1px] border-[#D6E8EE]',
					className
				)}
			>
				<ul className="menu relative flex flex-col gap-[14px] ">
					{categories.map((item, index) => (
						<li
							key={index}
							className="w-full text-[20px]/[1.3] text-black  border-b-[1px] border-transparent hover:border-[#D6E8EE] group font-krub font-light"
						>
							<a
								href={item.link}
								className="flex items-center justify-between cursor-pointer"
								onClick={e => {
									e.preventDefault();
									setFirstClickCategory(true);
									toggleSubmenu(index);
									if(!firstClickCategory && item.subcategories.length > 0){
										return;
									}
									navigate(`/category--${item.id}--${(item.name).toLowerCase()}`);
									getProductOfCategory(item.id);
									setIsShowCatalog(false);
									setFirstClickCategory(false);
								}}
							>
								<div className="flex items-center gap-2 pr-5">
									<span>{item.name}</span>
								</div>
								{item.subcategories.length > 0 && (
									<img
										src="/arrow.svg"
										alt="arrow"
										className="cursor-pointer"
									/>
								)}
							</a>

							{item.subcategories && item.subcategories.length > 0 && isOpenSubmenu === index && (
								<MenuItem menu={item.subcategories} depth={1} />
							)}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
