import { cards } from '../../seed/seed';
import { HomeBlock } from './HomeBlock';

import { mainPage as t } from '../../translations/translations';
import { homePageStore } from '../../store/homePageStore';
import { translateStore } from '../../store/translateStore';

export const Watch = () => {
	const lang = translateStore(state => state.lang);

	const allProducts = homePageStore(state => state.allProducts);

	return (
		<div className="watch mb-30">
			<HomeBlock title={t.watchForHim[lang]} cards={allProducts} />
		</div>
	);
};
