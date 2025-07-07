
import { HomeBlock } from './HomeBlock';
import { homePageStore } from '../../store/homePageStore';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';

export const NewProducts = () => {

	const allProducts = homePageStore(state => state.allProducts)

	const lang = useSelector(selectLanguage);

	return (
		<div className="new mb-30 max-600px:mb-[50px]">
			<HomeBlock title={t.new[lang]} cards={allProducts} />
		</div>
	);
};
