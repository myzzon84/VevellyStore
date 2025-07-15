import { Container } from '../Container/Container';

import { mainPage as t } from '../../translations/translations';
import { translateStore } from '../../store/translateStore';

export const Gift = () => {
	const lang = translateStore(state => state.lang);

	return (
		<div className="gift mb-30 max-600px:mb-[50px]">
			<Container>
				<div className="flex justify-between items-center gap-5 relative max-800px:flex-col">
					<div className="flex-1">
						<img src="/gift.png" alt="gift" />
					</div>
					<div className="flex-1 p-5 pt-0 max-800px:p-0">
						<div className="gift_title text-[32px] py-5 uppercase leading-[42px] text-[#0D0C0C] max-800px:absolute max-800px:-top-10 max-800px:left-1/2 max-800px:-translate-1/2 max-800px:w-full max-800px:text-center max-469px:text-[24px]/[1.3]">
							{t.giftTitle[lang]}
						</div>
						<div className="text-lg leading-6">
							<p className="pb-5 max-800px:max-w-[580px] mx-auto max-469px:text-[16px]/[1.3]">{t.giftText[lang]}</p>
						</div>
						<div className="text-right text-[18px]/[1.3] text-[#FDFDFD] max-800px:text-center">
							<a href="#" className={` inline-block bg-[#018ABE] px-[10px] py-3 rounded-[4px] max-800px:w-full`}>{t.chooseGiftCard[lang]}</a>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};
