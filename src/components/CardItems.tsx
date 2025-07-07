import clsx from 'clsx';
import React, { useState } from 'react';
import Button from './Button';
import Icon from './Icon';

export type CartItemType = {
	id: number;
	img: string | string[];
	badge?: string | string[];
	fav?: boolean;
	category: string;
	title: string;
	old_price?: number;
	price?: number;
};

interface Props {
	cards: CartItemType[];
}

export const CardItems: React.FC<Props> = ({ cards }) => {
	return (
		<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18">
			{cards.map(item => {
				const [currentImgIndex, setCurrentImgIndex] = useState(0);
				const images = Array.isArray(item.img) ? item.img : [item.img];

				const handleNextImage = () => {
					if (images.length > 1) {
						setCurrentImgIndex((currentImgIndex + 1) % images.length);
					}
				};

				return (
					<div key={item.id} className="card py-5 group">
						<div className="img relative mb-2">
							{Array.isArray(item.badge)
								? item.badge.map((badge, index) => (
										<div
											key={index}
											className={clsx(
												badge === 'Sale' ? 'bg-[#FB3636]' : '',
												badge === 'New' ? 'bg-[#018ABE]' : '',
												badge === 'Top' ? 'bg-[#D6E8EE]' : '',
												'badge-card absolute top-0 left-0 py-1.5 px-2.5',
												index > 0 && 'mt-10'
											)}
										>
											{badge}
										</div>
								  ))
								: item.badge && (
										<span
											className={clsx(
												item.badge === 'Sale' ? 'bg-[#FB3636]' : '',
												item.badge === 'New' ? 'bg-[#018ABE]' : '',
												item.badge === 'Top' ? 'bg-[#D6E8EE]' : '',
												'badge-card absolute top-0 left-0 py-1.5 px-2.5'
											)}
										>
											{item.badge}
										</span>
								  )}
							<span className="fav-card absolute top-0 right-0 ">
								{item.fav ? <Icon name="fav" /> : <Icon name="like" />}
							</span>
							<img
								src={images[currentImgIndex]}
								alt={item.title}
								className="!h-[300px] object-cover"
							/>
							{images.length > 1 && (
								<span
									className="absolute bottom-0 right-0 p-2 cursor-pointer"
									onClick={handleNextImage}
								>
									<Icon name="down" color="#018ABE" className="-rotate-90" />
								</span>
							)}
						</div>
						<div className="wrap_info text-center">
							<div className="category text-lg leading-6">{item.category}</div>
							<div className="title text-sm leading-6">{item.title}</div>
							<div className="price text-lg leading-6">
								{item.old_price ? (
									<>
										<span className="line-through">${item.old_price}</span>{' '}
										<span className="text-red-400">$ {item.price}</span>
									</>
								) : (
									<span>${item.price}</span>
								)}
							</div>
							<Button
								className="opacity-0 group-hover:opacity-100 mt-2"
								type="button"
								variant="primary"
							>
								Add to bag
							</Button>
						</div>
					</div>
				);
			})}
		</div>
	);
};
