import { configureStore } from '@reduxjs/toolkit';
import { companiesApi } from './apis/companies';
import { itemsApi } from './apis/items';
import { cartSlice } from './slices/cart';
import { productsSlice } from './slices/products';

export const store = configureStore({
	reducer: {
		[itemsApi.reducerPath]: itemsApi.reducer,
		[companiesApi.reducerPath]: companiesApi.reducer,
		[productsSlice.name]: productsSlice.reducer,
		[cartSlice.name]: cartSlice.reducer
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(itemsApi.middleware)
			.concat(companiesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
