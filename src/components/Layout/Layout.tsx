import { Fragment } from 'react/jsx-runtime';
import Footer from '../Footer/Footer';
import Header from '../Header/NewHeader';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className={` min-h-[100vh]`}>
			<Header />
			<main>{children}</main>
			<Footer />
			<ScrollToTopButton />
		</div>
	);
};

export default Layout;
