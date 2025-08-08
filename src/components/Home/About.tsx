import { Container } from '../Container/Container';
import { mainPage as t } from '../../translations/translations';
import { translateStore } from '../../store/translateStore';

export const About = () => {
	const lang = translateStore(state => state.lang);

	return (
		<div className="about mb-30 ">
			<Container>
				<div className="flex justify-between gap-5">
					<div className="about_text flex-2 p-5 pt-0 relative max-1000px:flex-3 ">
						<div className={` absolute w-[60%] h-[1px] bg-[#018ABE] left-0 top-0 max-700px:w-full`}></div>
						<div className={` absolute w-[1px] h-[60%] bg-[#018ABE] left-0 top-0 max-700px:h-full`}></div>
						<div className="about_title text-[32px] py-5 uppercase leading-[42px] text-[#0D0C0C] max-600px:text-[24px]/[1.3] ">
							{t.aboutTitle[lang]}
						</div>
						<div className="text-lg leading-6 [&>p]:pb-5 max-600px:text-[16px]/[1.3]">
							<p>{t.aboutText.text1[lang]}</p>
							<p>{t.aboutText.text2[lang]}</p>
							<p>{t.aboutText.text3[lang]}</p>
							<p>{t.aboutText.text4[lang]}</p>
						</div>
						<div className="text-right text-lg leading-6">
							<a href="#">{t.readMore[lang]}</a>
						</div>
					</div>
					<div className="flex flex-2 max-700px:hidden justify-end items-start">
						<img src="/about.png" alt="about" className={` object-contain`} />
					</div>
				</div>
			</Container>
		</div>
	);
};
