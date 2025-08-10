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
		<div className="flex gap-5 min-w-[475px] max-500px:flex-col max-500px:min-w-auto">
			<ul className="flex flex-col gap-5 max-500px:flex-row">
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
