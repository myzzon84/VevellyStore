import { mountStoreDevtool } from 'simple-zustand-devtools';
import { catalogStore } from './CatalogStore';
import { headerStore } from './HeaderStore';
import { homePageStore } from './homePageStore';
import { translateStore } from './translateStore';

if (import.meta.env.MODE === 'development') {
	mountStoreDevtool('home page', homePageStore);
	mountStoreDevtool('header', headerStore);
	mountStoreDevtool('catalog', catalogStore);
	mountStoreDevtool('language', translateStore);
}