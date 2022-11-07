import {
	combineReducers,
	configureStore,
	PreloadedState,
} from "@reduxjs/toolkit";

import { companiesApi } from "./apis/companies";
import { itemsApi } from "./apis/items";
import { cartSlice } from "./slices/cart";
// Create the root reducer independently to obtain the RootState type
export const rootReducer = combineReducers({
	[cartSlice.name]: cartSlice.reducer,
	[itemsApi.reducerPath]: itemsApi.reducer,
	[companiesApi.reducerPath]: companiesApi.reducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(itemsApi.middleware)
				.concat(companiesApi.middleware),
	});
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
