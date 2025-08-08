import { useState } from 'react';
import { SwaggerCartItemType } from '../CardSlider';

interface ProductGalleryProps {
	selectedProduct: SwaggerCartItemType;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({selectedProduct}) => {
	const images: string[] = selectedProduct.images;
	const [currentImage, setCurrentImage] = useState<string>(images?.length ? images[0] : '');

	const handleCurrentImage = (image: string): void => {
		setCurrentImage(image);
	};

	return (
		<div className="w-[683px] flex gap-5">
			<ul className="flex flex-col gap-5">
				{images?.map(img => {
					return (
						<li
							key={img}
							onClick={() => handleCurrentImage(img)}
							className=" w-[167px] max-1100px:w-[120px]"
						>
							<img
								src={img}
								alt={img}
								className=""
							/>
						</li>
					);
				})}
			</ul>
			<div className=" border border-[#D6E8EE]">
				<img
					src={currentImage}
					alt={currentImage}
					className=""
				/>
			</div>
		</div>
	);
};

export default ProductGallery;
