import './App.css';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import router from '../routes/router';
import { RouterProvider } from 'react-router-dom';

function App() {

	return (
		<div className={` overflow-hidden bg-[#EFEFEF]`}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</div>
	);
}

export default App;
