import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { RefObject } from 'react';
import { burger as t } from '../../translations/translations';
import { translateStore } from '../../store/translateStore';

interface BurgerMenuProps {
	refBurger: RefObject<HTMLDivElement>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ refBurger }) => {
    const lang = translateStore(state => state.lang);
	return (
		<div
			ref={refBurger}
			className={` max-w-[1200px] mx-auto font-krub text-[20px]/[1.3] font-light relative`}
		>
			<div className={` w-[380px] bg-[#EFEFEF] py-10 pl-10 absolute z-10`}>
				<div className={`mb-[14px]`}>
					<Link to={'/products'}>{t.allProducts[lang]}</Link>
				</div>
				<div className={`mb-[58px]`}>
					<Link to={''}>{t.collections[lang]}</Link>
				</div>
				<div className={`mb-[14px]`}>
					<Link to={'/auth'}>{t.personalInformation[lang]}</Link>
				</div>
				<div className={`mb-[58px]`}>
					<Link to={''}>{t.favorites[lang]}</Link>
				</div>
				<div className={`mb-[14px]`}>
					<Link to={''}>{t.paymentAndDelivery[lang]}</Link>
				</div>
				<div className={`mb-[58px]`}>
					<Link to={''}>{t.exchangeAndReturn[lang]}</Link>
				</div>
				<div className={`mb-[58px]`}>
					<Link to={''}>{t.contacts[lang]}</Link>
				</div>
				<LanguageSwitcher />
			</div>
		</div>
	);
};

export default BurgerMenu;
