import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';

export const FullPromo = () => {
	const lang = useSelector(selectLanguage);
	return (
		<div className="full_promo mb-30 max-600px:mb-[50px]">
			<div className="wrap relative min-h-[300px] max-w-[1440px] mx-auto">
				<img
					className=" rotate-y-180 grayscale-100 min-h-[300px] object-cover"
					src="/full_promo.png"
					alt="promo"
				/>
				<div className="wrap_text max-w-[1440px] mx-auto relative">
					<div className="full_promo_text w-[430px] text-[38px]/[1.3] uppercase font-normal text-white absolute right-[8%] bottom-5 max-1000px:text-[28px] max-1000px:w-[300px] max-1000px:right-[4%] max-600px:text-[18px] max-600px:w-[185px]">
						{t.valentineDay[lang]}
					</div>
				</div>
			</div>
		</div>
	);
};
