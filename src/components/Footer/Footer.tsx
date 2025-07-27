import { Container } from '../Container/Container';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { footer as t } from '../../translations/translations';
import arrowDown from '../../assets/icons/arrow-down.svg';
import { useState } from 'react';
import useResize from '../../helpers/usePageSize';
import { translateStore } from '../../store/translateStore';
import { Link } from 'react-router-dom';

const Footer = () => {
	const lang = translateStore(state => state.lang);

	const [showInfo, setShowInfo] = useState(false);

	const _width = useResize()[0];

	return (
		<footer className="bg-[#d6e8ee]">
			<Container>
				<div className="flex justify-around py-[100px] max-800px:flex-col max-800px:py-[50px]">
					<div className="flex flex-col items-center max-800px:mb-10">
						<div className="footer_logo text-[40px] leading-[52px] max-600px:text-[30px]/[1.3]">
							<img src={'/Main_logo.png'} alt="main logo" className={`relative -left-6`} />
						</div>
						<div className="lang pt-5 mb-10">
							<LanguageSwitcher />
						</div>
						<div className={` flex gap-6`}>
							<Link to={''}><img src={'/facebook_icon.svg'} alt="facebook" /></Link>
							<Link to={''}><img src={'/linkedin_icon.svg'} alt="linkedin" /></Link>
							<Link to={''}><img src={'/instagram_icon.svg'} alt="instagram" /></Link>
						</div>
					</div>
					<div className="flex gap-[139px] max-800px:justify-center max-469px:flex-col-reverse">
						<div className="flex flex-col">
							<div className="text-2xl font-medium leading-8 text-[#0D0C0C] mb-4 max-600px:text-[18px]/[1.3] max-469px:text-center max-469px:flex max-469px:justify-center max-469px:items-center max-469px:gap-[15px] ">
								{t.info[lang]}
								{_width < 469 && (
									<img
										src={arrowDown}
										className={`${
											showInfo ? ' rotate-180' : ' rotate-0'
										} transition-all duration-500 cursor-pointer`}
										alt="arrow down"
										onClick={() => setShowInfo(!showInfo)}
									/>
								)}
							</div>
							<div
								className={`text-lg font-light leading-6 text-[#0d0c0c] max-600px:text-[16px]/[1.3] ${
									_width < 469 && !showInfo ? 'hidden' : ''
								}`}
							>
								<ul className="flex flex-col gap-2.5 max-469px:items-center">
									<li className="py-1">
										<a href="#">{t.paymentAndDelivery[lang]}</a>
									</li>
									<li className="py-1">
										<a href="#">{t.exchangeAndReturn[lang]}</a>
									</li>
									<li className="py-1">
										<a href="#">{t.careRecommendation[lang]}</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-col">
							<div className="text-2xl font-medium leading-8 text-[#0D0C0C] mb-4 max-600px:text-[18px]/[1.3] max-469px:text-center">
								{t.contacts[lang]}
							</div>
							<div className="text-lg font-light leading-6 text-[#0d0c0c] max-600px:text-[16px]/[1.3]">
								<ul className={` flex flex-col gap-2.5 max-469px:items-center`}>
									<li className="py-1">
										<a href="#">0-800-603-897</a>
									</li>
									<li className="py-1">
										<a href="#">+380 67 747 01 45</a>
									</li>
									<li className="py-1">
										<a href="#">vevelly@gmail.com</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
