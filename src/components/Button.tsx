import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface Props {
	type: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	children: ReactNode;
	className?: string;
	variant?: 'primary' | 'secondary' | 'size';
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ children, className, variant = 'primary', ...props }) => {
	const buttonVariants = {
		primary: 'w-full text-white text-lg leading-6 bg-[#018ABE] hover:bg-[#1870A6]',
		secondary:
			'text-black text-base leading-6 border border-[#C0C0C0] hover:text-gray-700 hover:bg-gray-100',
		size: 'py-[3px] px-2.5 w-12 h-6 text-sm text-[#434141] font-normal leading-4.5 border border-[#C0C0C0]',
	};

	const buttonClass = `p-2.5 font-light rounded-sm transition duration-300 ease-in-out ${
		buttonVariants[variant] || ''
	}`;

	return (
		<button {...props} className={clsx(buttonClass, className)}>
			{children}
		</button>
	);
};

export default Button;
