import { FC, useState } from 'react';
import {
	FieldErrors,
	RegisterOptions,
	UseFormRegister,
	UseFormWatch,
	FieldValues,
} from 'react-hook-form';

interface InputFormProps {
	register: UseFormRegister<FieldValues>;
	type: string[];
	name: keyof FieldValues;
	options: RegisterOptions<FieldValues>;
	text: string;
	watch: UseFormWatch<FieldValues>;
	errors: FieldErrors;
}

const InputForm: FC<InputFormProps> = ({ register, type, name, options, text, watch, errors }) => {
	const [focus, setFocus] = useState(false);

	const inputValue = watch(name);

	return (
		<div className={` relative `}>
			<input
				type={type[0]}
				{...register(name, options)}
				className={` h-10 border  pl-[10px] rounded-[4px] w-full outline-none ${
					errors[name] ? ' border-red-500' : inputValue ? 'border-[#34C74D]' : 'border-[#D6E8EE]'
				}`}
				onFocus={() => setFocus(true)}
				onBlur={() => {
					if (!inputValue) {
						setFocus(false);
					}
				}}
			/>
			{errors[name] && (
				<span className=" text-red-500 text-xs">{errors[name]?.message?.toString()}</span>
			)}
			<div
				className={` absolute left-[10px] bg-white ${
					focus || inputValue
						? '-top-[12px] text-[12px]/[1.3] text-black z-auto'
						: 'text-[#C0C0C0] top-[6px] text-[16px]/[1.3] -z-[1]'
				} transition-all duration-300 p-1 `}
			>
				{text}
			</div>
		</div>
	);
};

export default InputForm;
