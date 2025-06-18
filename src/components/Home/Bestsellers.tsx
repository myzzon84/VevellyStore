import { Bestseller } from '../../seed/seed';
import { HomeBlock } from './HomeBlock';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';
import { homePageStore } from '../../store/homePageStore';

export const Bestsellers = () => {

	const allProducts = homePageStore(state => state.allProducts);

	const lang = useSelector(selectLanguage);

	return (
		<div className="bestsellers mb-30">
			<HomeBlock title={t.bestsellers[lang]} cards={allProducts} />
		</div>
	);
};
