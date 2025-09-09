import Button from '../Button';
import MetalColorSwitcher from './MetalColorSwitcher';
import { SwaggerCartItemType } from '../CardSlider';
import { FC, useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface ProductInfoProps {
	selectedProduct: SwaggerCartItemType;
}

const ProductInfo: FC<ProductInfoProps> = ({ selectedProduct }) => {
	const subproducts = selectedProduct.subproducts;

	const marks: { [key: number]: number } = {};
	const sizes: number[] = [];
	subproducts.forEach(item => {
		if (item.size) {
			const size = Number(item.size);
			marks[size] = size;
			sizes.push(size);
		}
	});

	const [currentSize, setCurrentSize] = useState(0);

	return (
		<div className="flex flex-col gap-5 justify-between min-w-[370px] max-900px:min-w-[220px]">
			<div className="flex flex-col gap-2 font-krub font-medium text-[#0D0C0C]">
				<h1 className="text-[24px]/[1.3] w-full">{selectedProduct?.name}</h1>
				<p className="text-[16px]/[1.3]">{selectedProduct?.design}</p>
				<p className="">{`SKU: ${selectedProduct?.sku}`}</p>
			</div>
			{selectedProduct && selectedProduct.materials.length > 1 ? (
				<MetalColorSwitcher />
			) : (
				<div>{`Metal color: ${selectedProduct.materials[0].material.color}`}</div>
			)}

			{/* <SizeComponent /> */}
			{sizes.length > 0 && selectedProduct.subproducts.length > 1 ? (
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
					onChange={num => {
						setCurrentSize(sizes.indexOf(num as number));
					}}
				/>
			) : null}

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
