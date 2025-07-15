import clsx from 'clsx';
import React from 'react';
import { MenuItem } from './MenuItem';
import { CategoriesType } from '../Header/Header';
import { headerStore } from '../../store/HeaderStore';

interface Props {
	className?: string;
	categories: CategoriesType[];
}

export const Menu: React.FC<Props> = ({ className, categories }) => {
	const [isOpenSubmenu, setIsOpenSubmenu] = React.useState<number | null>(null);

	const toggleSubmenu = (index: number) => {
		setIsOpenSubmenu(isOpenSubmenu === index ? null : index);
	};

	return (
		<>
			<div
				className={clsx(
					'w-60 h-auto flex flex-col gap-2.5 p-5 border-r-[1px] border-[#D6E8EE]',
					className
				)}
			>
				<ul className="menu relative ">
					{categories.map((item, index) => (
						<li
							key={index}
							className="w-full text-lg leading-6 text-[#0d0c0c]  border-b-[1px] border-transparent hover:border-[#D6E8EE] group"
						>
							<a
								href={item.link}
								className="flex items-center justify-between cursor-pointer"
								onClick={e => {
									e.preventDefault();
									toggleSubmenu(index);
								}}
							>
								<div className="flex items-center gap-2">
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
