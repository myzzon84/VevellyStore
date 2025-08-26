import './App.css';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import router from '../routes/router';
import { RouterProvider } from 'react-router-dom';
import useResize from '../helpers/usePageSize';
import { useEffect } from 'react';
import { homePageStore } from '../store/homePageStore';


function App() {

	const _width = useResize()[0];

	const getAllProducts = homePageStore(state => state.getAllProducts);
	const allProducts = homePageStore(state => state.allProducts);

	useEffect(() => {
		getAllProducts();
	}, []);

	console.log(allProducts);

	return (
		<div className={` overflow-hidden bg-[#EFEFEF]`}>
			<div className={` fixed z-50 bg-white text-[20px] p-1`}>
				{_width}
			</div>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</div>
	);
}

export default App;
