import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../core/models/item";

const initialState: ProductsState = {
  sorting: { type: "asc", field: "price" },
  brands: [],
  tags: [],
  products: [],
};

export const productsSlice = createSlice({
	initialState,
	name: 'products',
	reducers: {
		setSorting: (state, action: PayloadAction<ProductsState["sorting"]>) => {
			state.sorting = action.payload;
		},
	}
})

export const { setSorting } = productsSlice.actions;

export interface ProductsState {
	sorting: { type: 'asc'|'desc', field: Extract<keyof Item, 'price'|'added'> },
	brands: string[],
	tags: string[],
	products: Item[]
}

export interface SortingOptions {
  type: "asc" | "desc";
  field: Extract<keyof Item, "price" | "added">;
}

