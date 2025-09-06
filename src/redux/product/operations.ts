import { Product, ErrorResponse } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';

import { Endpoints } from '../../api/endpoints';

export const getProductByIdThunk = createAsyncThunk<
	Product,
	number,
	{ rejectValue: ErrorResponse }
>('product/getById', async (productId, thunkAPI) => {
	const { ALL_PRODUCT } = Endpoints;
	try {
		const { data } = await api.get<Product>(`${ALL_PRODUCT}${productId}/`);
		return data;
	} catch (err) {
		console.error(err);
		return thunkAPI.rejectWithValue({ message: (err as Error).message });
	}
});
