
import { homePageStore } from '../../../store/homePageStore';
import { productCardPageStore } from '../../../store/ProductCardPageStore';

const Description = () => {
	const selectedProduct = homePageStore(state => state.selectedProduct);
	const currentSize = productCardPageStore(state => state.currentSize);

	return (
		<div className="flex gap-15 max-768px:flex-col">
			<ul className="max-w-[464px] flex flex-col gap-2.5 flex-shrink-0">
				{selectedProduct?.materials?.[0]?.material?.material && (
					<li className="flex gap-2.5 items-center">
						<p className="w-22 text-lg font-medium leading-6 capitalize">Metal: </p>
						<p className="text-lg font-light leading-6">
							{selectedProduct?.materials?.[0]?.material?.material}
						</p>
					</li>
				)}

				{selectedProduct?.materials?.[0]?.material?.color && (
					<li className="flex gap-2.5 items-center">
						<p className="w-22 text-lg font-medium leading-6 capitalize">Color: </p>
						<p className="text-lg font-light leading-6">
							{selectedProduct?.materials?.[0]?.material?.color}
						</p>
					</li>
				)}
				{selectedProduct?.materials?.[0]?.material?.assay && (
					<li className="flex gap-2.5 items-center">
						<p className="w-22 text-lg font-medium leading-6 capitalize">Fineness: </p>
						<p className="text-lg font-light leading-6">
							{selectedProduct?.materials?.[0]?.material?.assay}
						</p>
					</li>
				)}
				{selectedProduct?.materials?.[0]?.material?.label && (
					<li className="flex gap-2.5 items-center">
						<p className="w-22 text-lg font-medium leading-6 capitalize">Style: </p>
						<p className="text-lg font-light leading-6">
							{selectedProduct?.materials?.[0]?.material?.label}
						</p>
					</li>
				)}

				<li className="flex gap-2.5 items-start">
					<p className="w-22 text-lg font-medium leading-6 capitalize">Size: </p>
					<ul className="flex flex-col gap-1.5 ">
						{selectedProduct?.subproducts?.[currentSize]?.width && (
							<li className="flex gap-2.5 aline-center">
								<p className="w-22 capitalize text-lg font-light leading-6">Height: </p>
								<p className="text-lg font-light leading-6">
									{selectedProduct?.subproducts?.[currentSize]?.width}
								</p>
							</li>
						)}
						{selectedProduct?.subproducts?.[currentSize]?.length && (
							<li className="flex gap-2.5 aline-center">
								<p className="w-22 capitalize text-lg font-light leading-6">Length: </p>
								<p className="text-lg font-light leading-6">
									{selectedProduct?.subproducts?.[currentSize]?.length}
								</p>
							</li>
						)}
						{selectedProduct?.subproducts?.[currentSize]?.weight && (
							<li className="flex gap-2.5 aline-center">
								<p className="w-22 capitalize text-lg font-light leading-6">Weight: </p>
								<p className="text-lg font-light leading-6">
									{selectedProduct?.subproducts?.[currentSize]?.weight}
								</p>
							</li>
						)}
						{selectedProduct?.subproducts?.[currentSize]?.width && (
							<li className="flex gap-2.5 aline-center">
								<p className="w-22 capitalize text-lg font-light leading-6">Thickness: </p>
								<p className="text-lg font-light leading-6">
									{selectedProduct?.subproducts?.[currentSize]?.width}
								</p>
							</li>
						)}
					</ul>
				</li>
				{selectedProduct?.gemstone?.[0]?.gemstone && (
					<li className="flex gap-2.5 items-center">
						<p className="w-22 text-lg font-medium leading-6 capitalize">Stone: </p>
						<p className="text-lg font-light leading-6">
							{selectedProduct?.gemstone?.[0]?.gemstone}
						</p>
					</li>
				)}
			</ul>
			<div>
				<p className="text-lg font-normal leading-6 text-justify">
					{selectedProduct?.description?.[0]?.text}
				</p>
			</div>
		</div>
	);
};

export default Description;
