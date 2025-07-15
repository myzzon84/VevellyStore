
import { HomeBlock } from './HomeBlock';
import { mainPage as t } from '../../translations/translations';
import { homePageStore } from '../../store/homePageStore';
import { translateStore } from '../../store/translateStore';

export const Bestsellers = () => {

	const allProducts = homePageStore(state => state.allProducts);
	const lang = translateStore(state => state.lang);

	return (
		<div className="bestsellers mb-30">
			<HomeBlock title={t.bestsellers[lang]} cards={allProducts} />
		</div>
	);
};
