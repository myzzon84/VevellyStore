import React from 'react';
import { CardSlider, CartItemType } from '../CardSlider';
import { Container } from '../Container/Container';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';

interface Props {
	title: string;
	cards: CartItemType[];
}

export const HomeBlock: React.FC<Props> = ({ title, cards }) => {
	const lang = useSelector(selectLanguage);

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
					<CardSlider cards={cards} />
				</div>
			</Container>
		</>
	);
};
