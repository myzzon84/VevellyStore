import React from 'react';
import { useSelector } from 'react-redux';
import {
	currentMetalColorSelector,
	currentSizeSelector,
	materialsSelector,
	productSelector,
	subproductsSelector,
} from '../../../redux/product/selectors';
import { homePageStore } from '../../../store/homePageStore';

const Description = () => {

	const selectedProduct = homePageStore(state => state.selectedProduct);

	const product = useSelector(productSelector);
	const subproducts = useSelector(subproductsSelector);
	const materials = useSelector(materialsSelector);
	const currentMetalColor = useSelector(currentMetalColorSelector);
	const currentSize = useSelector(currentSizeSelector);

	return (
		<div className="flex gap-15 max-768px:flex-col">
			<ul className="max-w-[464px] flex flex-col gap-2.5 flex-shrink-0">
				<li className="flex gap-2.5 items-center">
					<p className="w-22 text-lg font-medium leading-6 capitalize">Metal: </p>
					<p className="text-lg font-light leading-6">
						{materials && materials[currentMetalColor]?.material?.material}
					</p>
				</li>

				<li className="flex gap-2.5 items-center">
					<p className="w-22 text-lg font-medium leading-6 capitalize">Color: </p>
					<p className="text-lg font-light leading-6">
						{materials && materials[currentMetalColor]?.material?.color}
					</p>
				</li>

				<li className="flex gap-2.5 items-center">
					<p className="w-22 text-lg font-medium leading-6 capitalize">Fineness: </p>
					<p className="text-lg font-light leading-6">
						{materials && materials[currentMetalColor]?.material?.assay}
					</p>
				</li>

				<li className="flex gap-2.5 items-center">
					<p className="w-22 text-lg font-medium leading-6 capitalize">Style: </p>
					<p className="text-lg font-light leading-6">
						{materials && materials[currentMetalColor]?.material?.label}
					</p>
				</li>

				<li className="flex gap-2.5 items-start">
					<p className="w-22 text-lg font-medium leading-6 capitalize">Size: </p>
					<ul className="flex flex-col gap-1.5 ">
						<li className="flex gap-2.5 aline-center">
							<p className="w-22 capitalize text-lg font-light leading-6">Height: </p>
							<p className="text-lg font-light leading-6">
								{subproducts && subproducts[currentSize]?.width}
							</p>
						</li>

						<li className="flex gap-2.5 aline-center">
							<p className="w-22 capitalize text-lg font-light leading-6">Length: </p>
							<p className="text-lg font-light leading-6">
								{subproducts && subproducts[currentSize]?.length}
							</p>
						</li>

						<li className="flex gap-2.5 aline-center">
							<p className="w-22 capitalize text-lg font-light leading-6">Weight: </p>
							<p className="text-lg font-light leading-6">
								{subproducts && subproducts[currentSize]?.weight}
							</p>
						</li>

						<li className="flex gap-2.5 aline-center">
							<p className="w-22 capitalize text-lg font-light leading-6">Thickness: </p>
							<p className="text-lg font-light leading-6">
								{subproducts && subproducts[currentSize]?.width}
							</p>
						</li>
					</ul>
				</li>

				<li className="flex gap-2.5 items-center">
					<p className="w-22 text-lg font-medium leading-6 capitalize">Stone: </p>
					<p className="text-lg font-light leading-6">
						{product && product?.gemstone[0]?.gemstone}
					</p>
				</li>
			</ul>
			<div>
				<p className="text-lg font-normal leading-6 text-justify">
					{product && product?.description[0]?.text}
				</p>
			</div>
		</div>
	);
};

export default Description;
