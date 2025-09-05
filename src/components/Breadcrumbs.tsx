import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { SwaggerCartItemType } from './CardSlider';

interface Props {
	className?: string;
	selectedProduct?: SwaggerCartItemType | null;
}

const Breadcrumbs: React.FC<Props> = ({ className, selectedProduct }) => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter(path => path);

	if (selectedProduct !== undefined) {
		if (selectedProduct?.name) {
			pathnames[pathnames.length - 1] = selectedProduct.name.split('(')[0];
		} else {
			pathnames[pathnames.length - 1] = '';
		}
	}

	return (
		<nav className={className}>
			<ul className="flex gap-2 text-sm text-[#434141]">
				<li>
					<Link to="/">Main page</Link>
				</li>
				{pathnames.map((value, index) => {
					const path = `/${pathnames.slice(0, index + 1).join('/')}`;
					return (
						<li key={path}>
							<span> / </span>

							<NavLink
								to={path}
								style={
									index === pathnames.length - 1
										? ({ isActive }) => {
												return {
													fontWeight: isActive ? 'bold' : '',
												};
										  }
										: {}
								}
							>
								{value}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Breadcrumbs;
