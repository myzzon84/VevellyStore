import { useState } from 'react';
import CheckBox from './CheckBox';
import { CategoriesType } from './Header/NewHeader';

const Filters = () => {
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

	return (
		<div className={` w-[340px] pl-10 bg-[#D6E8EE] absolute top-10 z-10`}>
			<div className={``}>
				<div className={` mb-5`}>Categories</div>
				<div className={` flex flex-col gap-[10px] ${showCategories ? 'h-auto' : 'h-[224px]'} overflow-hidden duration-500`}>
					{categories.map((item, index) => {
						if (index > 5 && !showCategories) return null;
						return <CheckBox label={item.name} key={index} />;
					})}
					<div
						className={` text-[14px]/[1.3] text-black font-light cursor-pointer`}
						onClick={() => setShowCategories(!showCategories)}
					>
						{showCategories ? 'See less' : 'See more'}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
