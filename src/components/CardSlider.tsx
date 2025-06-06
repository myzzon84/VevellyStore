import clsx from 'clsx';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Button from './Button';
import Icon from './Icon';

export type CartItemType = {
	id: number;
	img: string | string[];
	badge?: string;
	fav?: boolean;
	category: string;
	title: string;
	old_price?: number;
	price?: number;
};

interface Props {
	cards: CartItemType[];
}

export const CardSlider: React.FC<Props> = ({ cards }) => {
	const AnySlider = Slider as unknown as React.ComponentType<any>;
	const settings = {
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
	};
	return (
		<div className="w-[1400px]">
			<AnySlider {...settings}>
				{cards.map(item => {
					const [currentImgIndex, setCurrentImgIndex] = useState(0);
					const images = Array.isArray(item.img) ? item.img : [item.img];

					const handleNextImage = () => {
						if (images.length > 1) {
							setCurrentImgIndex((currentImgIndex + 1) % images.length);
						}
					};
					return (
						<div key={item.id} className="card group">
							<div className="img relative">
								{item.badge && (
									<span
										className={clsx(
											item.badge === 'Sale' ? 'bg-[#FF8D8D]' : '',
											item.badge === 'New' || 'Top' ? 'bg-[#D6E8EE]' : '',
											'badge-card absolute top-0 left-0 py-1.5 px-2.5'
										)}
									>
										{item.badge}
									</span>
								)}
								<span className="fav-card absolute top-3 right-3 ">
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
								<div className="title text-[16px]/[21px]">{item.title}</div>
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
								<Button className="hidden group-hover:block mt-2" type="button" variant="primary">
									Add to bag
								</Button>
							</div>
						</div>
					);
				})}
			</AnySlider>
		</div>
	);
};
