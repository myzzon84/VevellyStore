import { useSelector } from 'react-redux';
import { selectLanguage } from '../../redux/language/selectors';
import { header as t } from '../../translations/translations';

export const Callback = () => {
	const lang = useSelector(selectLanguage);

	return (
		<div className="absolute  top-8 right-0 w-44 flex flex-col gap-2.5 p-2.5 bg-white z-10">
			<div className="text-lg text-center leading-6 text-[#0d0c0c] border-b-[1px] border-[#D6E8EE] py-3">
				+38 067 747 01 45
			</div>
			<div>
				<span className="block text-sm leading-4.5 text-center text-black">
					{t.callToYou[lang]}
				</span>
			</div>
			<div>
				<div className="mb-2.5">
					<input
						className="w-full border border-[#D6E8EE] rounded-sm p-2.5 outline-0"
						type="text"
						placeholder={t.phoneNumber[lang]}
					/>
				</div>
				<button className="w-full text-sm leading-4.5 text-white bg-[#1E84C3] rounded-sm p-2.5">
					{t.callMe[lang]}
				</button>
			</div>
		</div>
	);
};
