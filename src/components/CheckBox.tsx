import { FC } from 'react';
import checkBoxIcon from '../assets/icons/checkbox.png';
import { FieldValues, UseFormRegister, UseFormWatch, } from 'react-hook-form';



interface CheckBoxProps {
	label: string;
	register: UseFormRegister<FieldValues>;
	name: any;
	watch: UseFormWatch<FieldValues>;
}

const CheckBox: FC<CheckBoxProps> = ({ label, register, name, watch }) => {
	const isChecked = watch(name);
	return (
		<label className={` flex gap-[6px] items-center text-[16px]/[1.3] text-[#0D0C0C] font-light cursor-pointer max-w-max`}>
			<input
				{...register(name)}
				type="checkbox"
				className={` hidden`}
			/>
			<div className={` w-[22px] h-[22px] rounded-[4px] border border-[#C0C0C0] bg-white`}>
				{isChecked && <img src={checkBoxIcon} alt="checkbox" />}
			</div>
			{label}
		</label>
	);
};

export default CheckBox;
