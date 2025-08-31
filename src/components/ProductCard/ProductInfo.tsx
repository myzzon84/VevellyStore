import Button from '../Button';
import SizeComponent from '../SizeComponent';
import MetalColorSwitcher from './MetalColorSwitcher';
import { useSelector } from 'react-redux';
import {
	currentSizeSelector,
	productSelector,
	subproductsSelector,
} from '../../redux/product/selectors';
import { SwaggerCartItemType } from '../CardSlider';
import { FC, useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface ProductInfoProps {
	selectedProduct: SwaggerCartItemType;
}

const ProductInfo: FC<ProductInfoProps> = ({ selectedProduct }) => {
	const product = useSelector(productSelector);
	const subproducts = selectedProduct.subproducts;
	const currentSize = useSelector(currentSizeSelector);

	const marks: { [key: number]: number } = {};

	const sizes = subproducts.map((item, index) => {
		return Number(item.length || item.size);
	});

	sizes.forEach(item => {
		marks[item] = item;
	});

	return (
		<div className="flex flex-col gap-5 justify-between min-w-[370px] max-900px:min-w-[220px]">
			<div className="flex flex-col gap-2 font-krub font-medium text-[#0D0C0C]">
				<h1 className="text-[24px]/[1.3] w-full">{selectedProduct?.name}</h1>
				<p className="text-[16px]/[1.3]">{selectedProduct?.design}</p>
				<p className="">{`SKU: ${selectedProduct?.sku}`}</p>
			</div>
			<MetalColorSwitcher />
			{/* <SizeComponent /> */}
			<Slider
				marks={marks}
				max={Math.max(...sizes)}
				min={Math.min(...sizes)}
				step={null}
				included={false}
				styles={{
					track: Object.keys(marks).length === 1 ? { backgroundColor: 'transparent' } : undefined,
					rail: Object.keys(marks).length === 1 ? { backgroundColor: 'transparent' } : undefined,
				}}
			/>
			<div>
				{subproducts && subproducts[currentSize]?.old_price ? (
					<>
						<span className="text-[16px] font-normal line-through mr-2.5">
							${subproducts && subproducts[currentSize]?.old_price}
						</span>
						<span className="text-lg font-normal text-red-400 leading-6">
							${subproducts && subproducts[currentSize]?.new_price}
						</span>
					</>
				) : (
					<span className="text-lg font-normal text-[#0D0C0C] leading-6">
						${subproducts && subproducts[currentSize]?.price}
					</span>
				)}
			</div>

			<Button type="button" variant="primary">
				Add to bag
			</Button>

			<Button type="button" variant="secondary">
				Add to favorites
			</Button>
		</div>
	);
};

export default ProductInfo;
