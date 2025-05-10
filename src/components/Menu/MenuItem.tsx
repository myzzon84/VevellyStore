import clsx from 'clsx';
import React from 'react';

interface MenuItemProps {
	slug: string;
	name: string;
	subcategories?: MenuItemProps[];
}

interface Props {
	menu: MenuItemProps[];
	depth?: number;
}
export const MenuItem: React.FC<Props> = ({ menu, depth = 0 }) => {
	const [isOpenSubmenu, setIsOpenSubmenu] = React.useState<number | null>(null);

	const toggleSubmenu = (index: number) => {
		setIsOpenSubmenu(isOpenSubmenu === index ? null : index);
	};
	return (
		<ul
			className={clsx(
				'absolute py-5 pl-5 left-full border-r-[1px] border-[#D6E8EE] bg-white w-60 shadow-md',
				{
					relative: depth === 0,
				}
			)}
			style={{
				top: depth < 1 ? '0px' : '-20px',
				left: depth < 1 ? '0' : 'calc(100% + 21px)',
				padding: depth < 1 ? '0' : '20px',
			}}
		>
			{menu.map((item, index) => (
				<li
					key={index}
					className="relative py-2 border-b-[1px] border-transparent hover:border-[#D6E8EE] group"
				>
					<a href={item.slug} className="flex justify-between items-center ">
						{item.name}
						{item.subcategories && (
							<img
								src="/arrow.svg"
								alt="arrow"
								className="cursor-pointer"
								onClick={e => {
									e.preventDefault();
									toggleSubmenu(index);
								}}
							/>
						)}
					</a>

					{item.subcategories && isOpenSubmenu === index && (
						<MenuItem menu={item.subcategories} depth={depth + 1} />
					)}
				</li>
			))}
		</ul>
	);
};
