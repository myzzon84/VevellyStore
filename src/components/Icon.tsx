import React from 'react';

type IconProps = {
	label?: string;
	name: string;
	badge?: number;
	width?: number;
	height?: number;
	color?: string;
	stroke?: string;
	className?: string;
	setSearchVisible?: (bool: boolean) => void;
	searchVisible?: boolean;
};

const Icon: React.FC<IconProps> = ({
	label,
	name,
	badge,
	width = 24,
	height = 24,
	color = '#0D0C0C',
	stroke,
	className,
	setSearchVisible,
	searchVisible,
}) => (
	<div
		className={`relative cursor-pointer ${className} flex items-center gap-1`}
		onClick={() => setSearchVisible?.(!searchVisible)}
	>
		<svg className={className} width={width} height={height} stroke={stroke} fill={color}>
			<use href={`/icons_spite6.svg#${name}`} />
		</svg>

		{label && <span className={` font-sarabun text-[14px]/[1.3]`}>{label}</span>}

		{badge && badge > 0 && (
			<span
				className={`absolute top-[12px] left-[11px] bg-[#1E84C3] text-white text-xs font-bold rounded-full w-3.5 h-[13px] flex items-center justify-center ${className}`}
			>
				{badge}
			</span>
		)}
	</div>
);

export default Icon;
