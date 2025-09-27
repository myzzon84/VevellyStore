import { create } from 'zustand';
import api from '../api/axios';
import { SwaggerCartItemType } from '../components/CardSlider';

type Store = {
	loading: boolean;
	setLoading: (bool: boolean) => void;
	setLoadingCategoryProduct: (bool: boolean) => void;
	loadingCategoryProduct: boolean;
	allProducts: SwaggerCartItemType[];
	getAllProducts: () => void;
	productImages: string[];
	setProductImages: (arr: string[]) => void;
	selectedProduct: SwaggerCartItemType | null;
	setSelectedProduct: (id: number) => void;
	productsByCategory: SwaggerCartItemType[];
	getProductOfCategory: (categoryId: number) => void;
};

export const homePageStore = create<Store>()(set => ({
	selectedProduct: null,
	setSelectedProduct: id => {
		set({ selectedProduct: null });
		api.get(`product/${id}/`).then(data => {
			console.log(data.data);
			set({ selectedProduct: data.data });
		});
	},
	loading: false,
	setLoading: bool => set({ loading: bool }),
	loadingCategoryProduct: false,
	setLoadingCategoryProduct: bool => set({ loadingCategoryProduct: bool }),
	allProducts: [],
	productImages: [],
	setProductImages: arr => {
		set({ productImages: arr });
	},
	getAllProducts: () => {
		set({ allProducts: [] });
		set({ loading: true });
		api
			.get('all-products/?page_size=50', { headers: { 'Accept-Language': 'en' } })
			.then(res => {
				let result = res.data.results;
				set({ allProducts: result });
				set({ loading: false });
			})
			.catch(err => {
				set({ loading: false });
				console.log(err);
			});
	},
	productsByCategory: [],
	getProductOfCategory: categoryId => {
		set({ loadingCategoryProduct: true });
		set({productsByCategory: []});
		api
			.get(`all-products/?category=${categoryId}`)
			.then(res => {
				set({ productsByCategory: res.data.results });
				set({ loadingCategoryProduct: false });
			})
			.catch(err => {
				set({ loadingCategoryProduct: false });
				console.log(err);
			});
	},
}));
