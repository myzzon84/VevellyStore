import { FC, useEffect, useRef, useState } from 'react';
import checkBoxIcon from '../assets/icons/checkbox.png';

interface CheckBoxProps {
	label: string;
}

const CheckBox: FC<CheckBoxProps> = ({ label }) => {
	const inputRef = useRef(null);
	const [checked, setChecked] = useState(false);

	return (
		<label className={` flex gap-[6px] items-center text-[16px]/[1.3] text-[#0D0C0C] font-light cursor-pointer min-w-min`}>
			<input
				type="checkbox"
				className={` hidden`}
				ref={inputRef}
				checked={checked}
				onChange={() => {
                    if(checked){
                        setChecked(false);
                    }else{
                        setChecked(true);
                    }
					
				}}
			/>
			<div className={` w-[22px] h-[22px] rounded-[4px] border border-[#C0C0C0] bg-white`}>
				{checked && <img src={checkBoxIcon} alt="checkbox" />}
			</div>
			{label}
		</label>
	);
};

export default CheckBox;
