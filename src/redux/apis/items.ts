import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../../core/models/item";

// Define a service using a base URL and expected endpoints
export const itemsApi = createApi({
	reducerPath: "itemsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
	endpoints: (builder) => ({
		getItems: builder.query<Item[], void>({
			query: (name) => `items`,
			
		}),
	}),

});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetItemsQuery } = itemsApi;
