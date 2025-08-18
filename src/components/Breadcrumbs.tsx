import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

interface Props {
	className?: string;
}

const Breadcrumbs: React.FC<Props> = ({ className }) => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter(path => path);

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
								style={index === pathnames.length - 1 ? ({ isActive }) => {
									return {
										fontWeight: isActive ? 'bold' : '',
									};
								} : {}}
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
