import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
	items: [],
	totalCost: 0,
	modalVisible: false
};

export const cartSlice = createSlice({
	initialState,
	name: "cart",
	reducers: {
		addItemToCart: (
			state,
			{ payload }: PayloadAction<{ name: string; price: number }>
		) => {
			const { items } = state;
			const itemIndex = items.findIndex((i) => i.name === payload.name);

			if (itemIndex > -1) {
				const existingItem = items[itemIndex];
				existingItem.price === payload.price
					? existingItem.count++
					: items.push({
							count: 1,
							name: payload.name,
							price: payload.price,
					  });
			} else {
				items.push({
					count: 1,
					name: payload.name,
					price: payload.price,
				});
			}

			state.items = items;
			state.totalCost = calculateTotalCost(items);
		},
		decreaseItemCountByIndex: (
			state,
			{ payload }: PayloadAction<number>
		) => {
			const { items } = state;

			items[payload].count--;

			if (items[payload].count === 0) items.splice(payload, 1);
			state.items = items;
			state.totalCost = calculateTotalCost(items);
		},
		increaseItemCountByIndex: (
			state,
			{ payload }: PayloadAction<number>
		) => {
			const { items } = state;

			items[payload].count++;
			state.items = items;
			state.totalCost = calculateTotalCost(items);
		},

		setCartModalVisibility: (state, { payload }: PayloadAction<boolean>) => {
			state.modalVisible = payload
		},
	},
});

function calculateTotalCost(items: CartItemDetail[]) {
	return items.reduce((cost, { price, count }) => (cost += price * count), 0)
}

export const {
	addItemToCart,
	decreaseItemCountByIndex,
	increaseItemCountByIndex,
	setCartModalVisibility,
} = cartSlice.actions;

export interface CartState {
	items: CartItemDetail[];
	totalCost: number;
	modalVisible: boolean;
}

export type CartItemDetail = {
	name: string;
	price: number;
	count: number;
};
