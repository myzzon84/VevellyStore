import { Container } from '../Container/Container';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { mainPage as t } from '../../translations/translations';

export const About = () => {
	const lang = useSelector(selectLanguage);

	return (
		<div className="about mb-30 ">
			<Container>
				<div className="flex justify-between gap-5">
					<div className="about_text flex-1 p-5 pt-0 relative ">
						<div className={` absolute w-[60%] h-[1px] bg-[#018ABE] left-0 top-0`}></div>
						<div className={` absolute w-[1px] h-[60%] bg-[#018ABE] left-0 top-0`}></div>
						<div className="about_title text-[32px] py-5 uppercase leading-[42px] text-[#0D0C0C] ">
							{t.aboutTitle[lang]}
						</div>
						<div className="text-lg leading-6 [&>p]:pb-5">
							<p>{t.aboutText.text1[lang]}</p>
							<p>{t.aboutText.text2[lang]}</p>
							<p>{t.aboutText.text3[lang]}</p>
							<p>{t.aboutText.text4[lang]}</p>
						</div>
						<div className="text-right text-lg leading-6">
							<a href="#">{t.readMore[lang]}</a>
						</div>
					</div>
					<div className="flex-1">
						<img src="/about.png" alt="about" />
					</div>
				</div>
			</Container>
		</div>
	);
};
