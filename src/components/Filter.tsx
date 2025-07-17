import React from 'react';
import { FilterItemsSeed } from '../seed/seed';

interface FilterProps {
	onClose: () => void;
}

export const Filter: React.FC<FilterProps> = ({ onClose }) => {
	return (
		<div className="filter shadow-xl w-[300px] bg-white flex flex-col transform transition-transform duration-500 translate-x-0">
			<div className="filter_content flex flex-col p-6">
				{FilterItemsSeed.map(item => (
					<div key={item.title} className="border-b-[1px] border-[#018ABE] mb-5">
						<h3>{item.title}</h3>
						{item.title.toLowerCase() === 'розмір' ? (
							<div className="filter_wrap_size flex gap-3 pb-6 flex-wrap">
								{item.params.map(param => (
									<button key={param.name} className="flex items-center">
										<span className="p-2.5 rounded-sm transition duration-300 ease-in-out py-[3px] px-2.5 w-12 h-6 text-sm text-[#434141] font-normal leading-4.5 border border-[#C0C0C0]">
											{param.name}
										</span>
									</button>
								))}
							</div>
						) : (
							<div className="filter_wrap flex flex-col gap-1 pb-6">
								{item.params.map(param => (
									<label key={param.name} className="flex items-center">
										<input type="checkbox" className="w-5.5 h-6" />
										<span className="ml-3">{param.name}</span>
									</label>
								))}
							</div>
						)}
					</div>
				))}
				<div className="filter_btn flex flex-row items-center justify-between">
					<button
						className="text-lg py-2.5 px-1 leading-6 font-light text-[#434141] border-b-[1px] border-[#018ABE]"
						onClick={() => console.log('Clear filter')}
					>
						Clear all filters
					</button>
					<button
						className="text-lg py-2.5 px-7 leading-6 font-light text-[#434141] bg-[#018ABE] rounded-sm transition duration-300 ease-in-out"
						onClick={() => console.log('Apply filter')}
					>
						Apply
					</button>
				</div>
			</div>
		</div>
	);
};
