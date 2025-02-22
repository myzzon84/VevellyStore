import React from 'react';

type IconProps = {
	name: string;
	badge?: number;
	width?: number;
	height?: number;
	color?: string;
	className?: string;
};

const Icon: React.FC<IconProps> = ({
	name,
	badge,
	width = 24,
	height = 24,
	color = '#0D0C0C',
	className,
}) => (
	<div className="relative inline-block">
		<svg className={className} width={width} height={height} fill={color}>
			<use href={`/icons_spite2.svg#${name}`} />
		</svg>

		{badge && badge > 0 && (
			<span
				className="absolute top-[12px] left-[11px] bg-[#1E84C3]
			 text-white text-xs font-bold rounded-full w-3.5 h-[13px] flex items-center justify-center"
			>
				{badge}
			</span>
		)}
	</div>
);

export default Icon;
