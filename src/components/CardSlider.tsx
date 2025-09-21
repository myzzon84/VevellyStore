import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Button from './Button';
import Icon from './Icon';
import { Link, useNavigate } from 'react-router-dom';
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
	certificates: string[];
	collection: null | string;
	description: [
		{
			id: number;
			keywords: null;
			name: string;
			seo_description: string;
			seo_title: string;
			slug: string;
			text: string;
		}
	];
	design: string;
	ean_13: null;
	gemstone: [
		{
			color: string;
			gemstone: string;
			id: number;
		}
	];
	id: number;
	images: string[];
	materials: [
		{
			material: {
				material: string;
				color: string;
				assay: string;
				label: string;
			};
		}
	];
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
	const [isSwiping, setIsSwiping] = useState(false);
	const AnySlider = Slider as unknown as React.ComponentType<any>;
	const settings = {
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		className: 'mySlick',
		beforeChange: () => setIsSwiping(true),
		afterChange: () => setIsSwiping(false),
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	const navigate = useNavigate();

	const setSelectedProduct = homePageStore(state => state.setSelectedProduct);

	return (
		<div className="max-w-[1200px] mx-auto">
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
							className="card group w-1/4 cursor-pointer relative !flex flex-col !h-full justify-between"
							onClick={() => {
								if (isSwiping) return;
								navigate(`/${item.category.name}/--${item.id}--${item.slug}/`);
								setSelectedProduct(item.id);
							}}
						>
							<div className="img relative flex justify-center">
								{item.statuses && (
									<div className={` absolute top-0 left-0 flex flex-col gap-2`}>
										{item.statuses.map((item, i) => (
											<div
												key={i}
												className={`badge-card py-1.5 px-2.5 w-max text-[14px]/[1.3] max-600px:text-[12px] max-600px:py-[2px] max-600px:px-1${
													item === 'Sale' ? 'bg-[#FF8D8D]' : ''
												} ${item === 'New' || item === 'Top' ? 'bg-[#D6E8EE]' : 'bg-blue-300'}`}
											>
												{item}
											</div>
										))}
									</div>
								)}
								<span className="fav-card absolute top-3 right-3 ">
									{item.fav ? <Icon name="fav" /> : <Icon name="like" />}
								</span>
								<img
									src={images[currentImgIndex]}
									alt={item.name}
									className={` object-cover max-h-[300px] max-1000px:max-h-[224px]`}
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
							<div className="wrap_info">
								<div className={` flex justify-between items-center px-2`}>
									<div className="title text-[16px]/[1.3] w-[40%] font-medium">
										{item.name.split('(')[0]}
									</div>
									<div className="price text-[16px]/[1.3] font-light flex justify-end gap-2 items-center">
										{item.subproducts[0]?.old_price ? (
											<>
												<span className=" text-[14px]/[1.3]">${item.subproducts[0].old_price}</span>{' '}
												<span className=" text-[16px]/[1.3] text-[#7B5B40]">
													${item.subproducts[0].new_price}
												</span>
											</>
										) : (
											// <span>${item.price}</span>
											<span>${item.subproducts[0]?.new_price}</span>
										)}
									</div>
								</div>

								<Button
									className={`hidden group-hover:block mt-2 absolute left-0 bottom-0`}
									type="button"
									variant="primary"
								>
									Add to bag
								</Button>
							</div>
							<div className={` w-full h-[39px] bg-[#EFEFEF]`}></div>
						</div>
					);
				})}
			</AnySlider>
			<div
				className={` max-w-[1200px] mx-auto font-sarabun text-[18px]/[1.3] font-extralight text-[#27697F] text-center`}
			>
				<Link to={''} className={` border border-[#27697F] rounded-[4px] py-[10px] px-[52px]`}>
					Discover more
				</Link>
			</div>
		</div>
	);
};
