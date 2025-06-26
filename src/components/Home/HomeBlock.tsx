import React from 'react';
import { CardSlider, SwaggerCartItemType } from '../CardSlider';
import { Container } from '../Container/Container';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';
import { homePageStore } from '../../store/homePageStore';
import { RotatingLines } from 'react-loader-spinner';

interface Props {
	title: string;
	cards: SwaggerCartItemType[];
}

export const HomeBlock: React.FC<Props> = ({ title, cards }) => {
	const lang = useSelector(selectLanguage);
	const loading = homePageStore(state => state.loading);

	return (
		<>
			<Container>
				<div className="flex items-center justify-between pb-10">
					<div className="title text-[46px] uppercase font-medium leading-15 text-[#0D0C0C] mb-4">
						{title}
					</div>
					<div className="text-lg font-light leading-6 text-[#0d0c0c]">{t.seeAll[lang]}</div>
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
