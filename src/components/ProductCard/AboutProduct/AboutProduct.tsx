import React, { useState } from 'react';
import Description from './Description';
import Payment from './Payment';
import Delivery from './Delivery';
import Recommendation from './Recommendation';
import useResize from '../../../helpers/usePageSize';

const AboutProduct = () => {
	const [activeTab, setActiveTab] = useState<string>('description');

	const tabClass =
		'p-2.5 w-full font-light text-[24px]/[1.3] max-900px:text-[18px] text-[#0D0C0C] border-r border-b border-r-[#D6E8EE] border-b-[#D6E8EE] cursor-pointer';

	const activeTabClass = '!border-r-[#018ABE] !border-b-[#018ABE]';

	const handleActiveTab = (tab: string): void => {
		setActiveTab(tab);
	};

	const _width = useResize()[0];
	return (
		<div className="mb-30">
			<ul className="flex gap-10 justify-between !mb-5 max-900px:gap-3 ">
				<li
					onClick={() => handleActiveTab('description')}
					className={`${tabClass} ${activeTab === 'description' ? activeTabClass : ''}`}
				>
					Description
				</li>
				<li
					onClick={() => handleActiveTab('payment')}
					className={`${tabClass} ${activeTab === 'payment' ? activeTabClass : ''}`}
				>
					Payment & Return
				</li>
				{_width > 768 && <li
					onClick={() => handleActiveTab('delivery')}
					className={`${tabClass} ${activeTab === 'delivery' ? activeTabClass : ''}`}
				>
					Delivery
				</li>}
				{_width > 768 && <li
					onClick={() => handleActiveTab('recommendation')}
					className={`${tabClass} ${activeTab === 'recommendation' ? activeTabClass : ''}`}
				>
					Care Recommendation
				</li>}
			</ul>
			{activeTab === 'description' && <Description />}
			{activeTab === 'payment' && <Payment />}
			{activeTab === 'delivery' && <Delivery />}
			{activeTab === 'recommendation' && <Recommendation />}
		</div>
	);
};

export default AboutProduct;
