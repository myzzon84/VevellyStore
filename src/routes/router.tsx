import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import NewProductsPage from '../pages/NewProductsPage';
import OrderPage from '../pages/OrderPage';
import BestsellersPage from '../pages/BestsellersPage';
import ProductCardPage from '../pages/ProductCardPage';
import ProductsPage from '../pages/ProductsPage';
import AuthPage from '../pages/AuthPage';
import CategoryPage from '../pages/CategoryPage';
import AllProductsPage from '../pages/AllProductsPage';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/bestsellers',
			element: <BestsellersPage />,
		},
		{
			path: '/new-products',
			element: <NewProductsPage />,
		},
		{
			path: '/products',
			element: <AllProductsPage />,
		},
		{
			path: '/:categoryName/:productId',
			element: <ProductCardPage />,
		},
		{
			path: '/order',
			element: <OrderPage />,
		},
		{
			path: '*',
			element: <NotFoundPage />,
		},
		{
			path: '/auth',
			element: <AuthPage/>
		},
		{
			path: '/:categoryName',
			element: <CategoryPage/>
		},
	],
	{
		future: {
			v7_startTransition: true,
			v7_relativeSplatPath: true,
		},
	}
);

export default router;
