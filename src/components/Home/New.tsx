import { cards } from '../../seed/seed';
import { HomeBlock } from './HomeBlock';
import { homePageStore } from '../../store/homePageStore';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';

export const NewProducts = () => {

	const newProducts = homePageStore(state => state.newProducts)

	const lang = useSelector(selectLanguage);

	return (
		<div className="new mb-30">
			<HomeBlock title={t.new[lang]} cards={newProducts} />
		</div>
	);
};
