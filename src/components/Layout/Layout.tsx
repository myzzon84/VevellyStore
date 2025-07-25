import Footer from '../Footer/Footer';
import Header from '../Header/NewHeader';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
			<ScrollToTopButton />
		</>
	);
};

export default Layout;
