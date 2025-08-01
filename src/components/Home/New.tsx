import { HomeBlock } from './HomeBlock';
import { homePageStore } from '../../store/homePageStore';

import { mainPage as t } from '../../translations/translations';
import { translateStore } from '../../store/translateStore';

export const NewProducts = () => {
	const allProducts = homePageStore(state => state.allProducts);

	const lang = translateStore(state => state.lang);

	return (
		<div className="new mb-30 max-600px:mb-[50px]">
			<HomeBlock
				title={[t.new[lang], 'arrivals']}
				cards={allProducts}/>
		</div>
	);
};
