import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterOptions, PagingOptions, SortingOptions } from "../helpers";

const initialState: ProductsState = {
	sorting: { type: "asc", field: "price" },
	pagination: {
		limit: 16,
		page: 0
	},
	filters: []
};

export const productsSlice = createSlice({
	initialState,
	name: "products",
	reducers: {
		setSorting: (
			state,
			action: PayloadAction<ProductsState["sorting"]>
		) => {
			state.sorting = action.payload;
		},
		setFilters: (
			state,
			action: PayloadAction<ProductsState["filters"]>
		) => {},
		setPagination: (
			state,
			action: PayloadAction<ProductsState["pagination"]>
		) => {
			state.pagination = action.payload;
		},
	},
});

export const { setSorting, setFilters, setPagination } = productsSlice.actions;

export interface ProductsState {
	sorting: SortingOptions;
	filters: FilterOptions[];
	pagination: PagingOptions;
}

