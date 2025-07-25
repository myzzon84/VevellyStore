import React from 'react';
import { CardSlider, SwaggerCartItemType } from '../CardSlider';
import { Container } from '../Container/Container';

import { mainPage as t } from '../../translations/translations';
import { homePageStore } from '../../store/homePageStore';
import { RotatingLines } from 'react-loader-spinner';
import { translateStore } from '../../store/translateStore';

interface Props {
	title: string;
	cards: SwaggerCartItemType[];
}

export const HomeBlock: React.FC<Props> = ({ title, cards }) => {
	const lang = translateStore(state => state.lang);
	const loading = homePageStore(state => state.loading);

	return (
		<>
			<Container>
				<div className="flex items-center justify-between pb-10 max-600px:pb-5 font-shippori-mincho-B1">
					<div className="title text-[46px]/[1.3] uppercase font-medium text-[#0D0C0C] mb-4 font-libre-caslon-display max-600px:text-[24px]/[1.3]">
						{title}
					</div>
					<div className="text-lg font-light leading-6 text-[#0d0c0c] max-600px:text-[16px]/[1.3]">{t.seeAll[lang]}</div>
				</div>
			</Container>
			<Container className={` card-slider`}>
				<div className="flex items-center justify-between">
					{loading ? (
						<RotatingLines
							visible={true}
							width="200"
							strokeColor='#018ABE'
							strokeWidth="3"
							animationDuration="0.75"
							ariaLabel="rotating-lines-loading"
						/>
					) : (
						<CardSlider cards={cards} />
					)}
				</div>
			</Container>
		</>
	);
};
