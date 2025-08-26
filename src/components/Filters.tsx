import { FC, MutableRefObject, ReactNode, useEffect, useRef, useState } from 'react';
import CheckBox from './CheckBox';
import { CategoriesType } from './Header/NewHeader';
import { FieldValues, useForm } from 'react-hook-form';
import { useOnClickOutside } from '../helpers/clickOutside';
import Slider from 'rc-slider';
import basket from '../assets/icons/basket.svg';

interface FiltersProps {
	setShowFilters: (bool: boolean) => void;
	filtersButtonRef: MutableRefObject<HTMLElement | null>;
}

const Filters: FC<FiltersProps> = ({ setShowFilters, filtersButtonRef }) => {
	const {
		register,
		watch,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FieldValues>({ mode: 'all' });
	const stored = sessionStorage.getItem('categories');
	let categories: CategoriesType[] = [];
	const [showCategories, setShowCategories] = useState(false);

	try {
		const parsed = stored ? JSON.parse(stored) : [];
		categories = Array.isArray(parsed.state.categories) ? parsed.state.categories : [];
	} catch (e) {
		console.error('Помилка парсингу categories:', e);
		categories = [];
	}

	const filtersRef = useRef(null);
	useOnClickOutside(filtersRef, e => {
		if (filtersButtonRef.current && filtersButtonRef.current.contains(e.target as Node)) {
			return;
		}
		setShowFilters(false);
	});

	const materialsFilter = [
		{ frontName: 'Yellow gold', codeName: 'yellow-gold' },
		{ frontName: 'White gold', codeName: 'white-gold' },
		{ frontName: 'Rose gold', codeName: 'rose-gold' },
		{ frontName: 'Silver', codeName: 'silver' },
		{ frontName: 'Platinum', codeName: 'platinum' },
		{ frontName: 'Stainless steel', codeName: 'stainless-steel' },
	];

	const priceFilter = [
		{ frontName: 'Under $100', codeName: 'price-under-100' },
		{ frontName: '$100-500', codeName: 'price-100-500' },
		{ frontName: '$501-1000', codeName: 'price-501-1000' },
		{ frontName: '$1000 +', codeName: 'price-more-1000' },
	];

	const gemstonesFilter = ['Diamonds', 'Sapphires', 'Emeralds', 'Rubies', 'Pearls'];

	const styleFilter = ['Classic', 'Modern', 'Minimalist', 'Vintage'];

	const onSubmit = ((data:object) => {
		console.log(data);
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={` w-[340px] px-10 bg-white absolute top-10 z-10 max-h-[80vh] overflow-y-auto shadow-lg pt-5`}
			ref={filtersRef}
		>
			<div className={` pb-[14px] border-b border-[#D6E8EE] mb-10`}>
				<div className={` mb-5 font-medium`}>Categories</div>
				<div
					className={` flex flex-col gap-[10px] overflow-hidden duration-500 relative`}
					style={{ height: showCategories ? `${categories.length * 32 + 30}px` : '224px' }}
				>
					{categories.map((item, index) => {
						return (
							<CheckBox
								label={item.name}
								key={index}
								register={register}
								name={item.slug}
								watch={watch}
							/>
						);
					})}
					<div
						className={` text-[14px]/[1.3] text-black font-light absolute bottom-0 w-full bg-white py-[10px]`}
						onClick={() => setShowCategories(!showCategories)}
					>
						<span className={` cursor-pointer`}>{showCategories ? 'See less' : 'See more'}</span>
					</div>
				</div>
			</div>
			<div className={`border-b border-[#D6E8EE] pb-[14px] mb-10`}>
				<div className={` font-medium mb-5`}>Material</div>
				<div className={` flex flex-col gap-[10px]`}>
					{materialsFilter.map(item => (
						<CheckBox
							key={item.frontName}
							label={item.frontName}
							register={register}
							name={item.codeName}
							watch={watch}
						/>
					))}
				</div>
			</div>
			<div className={`border-b border-[#D6E8EE] pb-[14px] mb-10`}>
				<div className={` font-medium mb-5`}>Material</div>
				<div className={` flex flex-col gap-[10px]`}>
					{priceFilter.map(item => (
						<CheckBox
							key={item.frontName}
							label={item.frontName}
							register={register}
							name={item.codeName}
							watch={watch}
						/>
					))}
				</div>
			</div>
			<div className={`border-b border-[#D6E8EE] pb-[34px] mb-10`}>
				<div className={` font-medium mb-5`}>Size</div>
				<Slider
					marks={{ '16': '16', '17': '17', '18': '18', '19': '19', '20': '20' }}
					max={20}
					min={16}
					step={null}
					included={false}
				/>
			</div>
			<div className={`border-b border-[#D6E8EE] pb-[14px] mb-10`}>
				<div className={` font-medium mb-5`}>Gemstones</div>
				<div className={` flex flex-col gap-[10px]`}>
					{gemstonesFilter.map(item => (
						<CheckBox
							key={item}
							label={item}
							register={register}
							name={item.toLowerCase()}
							watch={watch}
						/>
					))}
				</div>
			</div>
			<div className={`border-b border-[#D6E8EE] pb-[14px] mb-10`}>
				<div className={` font-medium mb-5`}>Style</div>
				<div className={` flex flex-col gap-[10px]`}>
					{styleFilter.map(item => (
						<CheckBox
							key={item}
							label={item}
							register={register}
							name={item.toLowerCase()}
							watch={watch}
						/>
					))}
				</div>
			</div>
			<div className={`flex pb-10 justify-between font-sarabun font-extralight text-[18px]/[1.3]`}>
				<button
					className={``}
					onClick={e => {
						e.preventDefault();
						reset();
					}}
				>
					Clear all filters
				</button>
				<button
					type='submit'
					className={`flex gap-[10px] px-[17px] py-[10px] border border-[#27697f] rounded-[4px]`}
				>
					<img src={basket} alt="basket icon" />
					<span className={` text-[#27697f]`}>Apply</span>
				</button>
			</div>
		</form>
	);
};

export default Filters;
