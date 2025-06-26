import clsx from 'clsx';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Button from './Button';
import Icon from './Icon';
import { useNavigate } from 'react-router-dom';
import { homePageStore } from '../store/homePageStore';

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
export type SwaggerCartItemType = {
	article: string;
	attributes: [
		{
			clasp_type: null;
			coating_material: null;
			gender: string;
			id: number;
			weaving_type: null;
		}
	];
	category: {
		has_diameter: boolean;
		has_length: boolean;
		has_weight: boolean;
		has_width: boolean;
		id: number;
		name: string;
		slug: string;
		updated_at: string;
	};
	certificates: [];
	collection: null | string;
	description: [];
	design: string;
	ean_13: null;
	gemstone: [];
	id: number;
	images: [];
	material: [{
		material: {
			material: string,
		}
	}];
	name: string;
	occasions: string;
	sku: string;
	slug: string;
	statuses: string[];
	subcategory: null;
	subproducts: [
		{
			article: string;
			discount_applied: number;
			discount_percentage: string;
			ean_13: null;
			id: number;
			length: number;
			max_length: null;
			new_price: number;
			old_price: number;
			position: number;
			price: string;
			size: string;
			sku: string;
			weight: number;
			width: null;
		}
	];
	fav?: boolean;
	price?: number;
	old_price?: number;
};

interface Props {
	cards: SwaggerCartItemType[];
}

export const CardSlider: React.FC<Props> = ({ cards }) => {
	const AnySlider = Slider as unknown as React.ComponentType<any>;
	const settings = {
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
	};

	const navigate = useNavigate();

	const setSelectedProduct = homePageStore(state => state.setSelectedProduct);

	return (
		<div className="max-w-[1440px]">
			<AnySlider {...settings}>
				{cards.map(item => {
					const [currentImgIndex, setCurrentImgIndex] = useState(0);
					const images = Array.isArray(item.images) ? item.images : [item.images];

					const handleNextImage = () => {
						if (images.length > 1) {
							setCurrentImgIndex((currentImgIndex + 1) % images.length);
						}
					};
					return (
						<div
							key={item.id}
							className="card group w-1/4"
							onClick={() => {
								navigate(`/products/${item.id}`);
								setSelectedProduct(item.id);
							}}
						>
							<div className="img relative">
								{item.statuses && (
									<span
										className={clsx(
											item.statuses.includes('Sale') ? 'bg-[#FF8D8D]' : '',
											item.statuses.includes('New') || item.statuses.includes('Top')
												? 'bg-[#D6E8EE]'
												: '',
											'badge-card absolute top-0 left-0 py-1.5 px-2.5'
										)}
									>
										{item.statuses}
									</span>
								)}
								<span className="fav-card absolute top-3 right-3 ">
									{item.fav ? <Icon name="fav" /> : <Icon name="like" />}
								</span>
								<img
									src={images[currentImgIndex]}
									alt={item.name}
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
								<div className="category text-lg leading-6">{item.category.name}</div>
								<div className="title text-[16px]/[21px]">{item.name}</div>
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
