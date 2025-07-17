import { FC, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Inputs } from '../pages/AuthPage';

interface InputFormProps {
	register: UseFormRegister<Inputs>;
	type: string[];
	name: keyof Inputs;
	options: {};
	text: string;
}

const InputForm: FC<InputFormProps> = ({ register, type, name, options, text }) => {
	const [focus, setFocus] = useState(false);

	return (
		<div className={` relative `}>
			<input
				type={type[0]}
				{...register(name, options)}
				className={` h-10 border border-[#D6E8EE] pl-[10px] rounded-[4px] w-full`}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
			/>
			<div className={` absolute left-[10px]   ${focus ? '-top-[12px] text-[12px]/[1.3] text-black' : 'text-[#C0C0C0] top-[6px] text-[16px]/[1.3]'} transition-all duration-300 bg-white p-1`}>
				{text}
			</div>
		</div>
	);
};

export default InputForm;
