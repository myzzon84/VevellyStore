import clsx from 'clsx';
import React from 'react';
import { translateStore } from '../../store/translateStore';

const LanguageSwitcher: React.FC = () => {
	const setLang = translateStore(state => state.setLang);
	const language = translateStore(state => state.lang);
	const handleChangeLanguage = (lang: 'ua' | 'en') => {
		setLang(lang);
	};

	return (
		<div className="flex items-center gap-[5px]">
			<button
				className={clsx(
					'text-lg leading-4.5  border-0 outline-0 cursor-pointer bg-transparent',
					language === 'ua' ? 'text-[#0d0c0c]' : 'text-[#c0c0c0]'
				)}
				onClick={() => handleChangeLanguage('ua')}
			>
				UA
			</button>
			<span className="w-[1px] h-[18px] bg-[#000]"></span>
			<button
				className={clsx(
					'text-lg leading-4.5  border-0 outline-0 cursor-pointer bg-transparent',
					language === 'en' ? 'text-[#0d0c0c]' : 'text-[#c0c0c0]'
				)}
				onClick={() => handleChangeLanguage('en')}
			>
				EN
			</button>
		</div>
	);
};

export default LanguageSwitcher;
