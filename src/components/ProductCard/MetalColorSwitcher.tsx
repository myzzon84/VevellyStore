import { useState } from 'react';
import arrowDown from '../../assets/icons/arrow-down.svg';
import { homePageStore } from '../../store/homePageStore';

const MetalColorSwitcher = () => {
	const [isOpen, setIsOpen] = useState(false);

	type material = [
		{material: {
			material: string;
			color: string;
		}}
	]
	const selectedProduct = homePageStore(state => state.selectedProduct);
	let materials: material | undefined = selectedProduct?.materials;
	const [currentMetalColor, setCurrentMetalColor] = useState(0);
	

	console.log(selectedProduct);

	return (
		<div className="flex gap-2.5 items-center">
			<p className="text-lg font-medium leading-6 text-[#0D0C0C]">Metal color:</p>

			<div className="relative w-28">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="w-full outline-none flex items-center gap-2.5"
				>
					<span className="text-lg text-[#0D0C0C] font-normal leading-6">
						{materials && materials[currentMetalColor]?.material?.color}
					</span>
					<span className="flex items-center">
						<img src={arrowDown} alt="Arrow Down" className="w-6 h-6" />
					</span>
				</button>

				{isOpen && (
					<ul className="absolute top-full w-full  bg-white border border-gray-300 rounded-md shadow-lg z-10">
						{materials?.map((item, index) => (
							<li
								key={index}
								className="p-1 text-[#0D0C0C] text-sm hover:bg-gray-200 cursor-pointer"
								onClick={() => {
									setCurrentMetalColor(index)
									setIsOpen(false);
								}}
							>
								{item.material.color}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default MetalColorSwitcher;
