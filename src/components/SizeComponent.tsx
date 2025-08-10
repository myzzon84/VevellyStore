import Button from './Button';
import { useSelector } from 'react-redux';
import { currentSizeSelector, subproductsSelector } from '../redux/product/selectors';
import { AppDispatch } from '../redux/store';
import { useDispatch } from 'react-redux';
import { handleCurrentSize } from '../redux/product/slice';

const SizeComponent = () => {
	const subproducts = useSelector(subproductsSelector);
	const currentSize = useSelector(currentSizeSelector);
	const dispatch: AppDispatch = useDispatch();

	const allSizes = subproducts?.map(item => {
		return item.length;
	});

	const handleSize = (index: number): void => {
		dispatch(handleCurrentSize(index));
	};

	return (
		<div className="">
			<p className="text-lg text-[#0D0C0C] font-medium leading-6">Size</p>
			<div className="flex gap-3 flex-wrap mt-2.5">
				{allSizes?.map((item, index) => {
					const isActive = currentSize === index ? '!border-[#018ABE]' : '';

					return (
						<Button
							type="button"
							onClick={() => handleSize(index)}
							variant="size"
							key={index}
							className={`${isActive}`}
						>
							{item}
						</Button>
					);
				})}
			</div>
		</div>
	);
};
export default SizeComponent;
