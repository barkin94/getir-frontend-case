import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Item } from "../../core/models/item";
import { GenericPagingResponse, GenericQuery, makeJsonServerQuery } from "../helpers";

// Define a service using a base URL and expected endpoints
export const itemsApi = createApi({
	reducerPath: "itemsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
	endpoints: (builder) => ({
		getItems: builder.query<GenericPagingResponse<Item>,GenericQuery<Item>>({
			query: (query) => {
				let resource = "items";
				if (query) {
					resource += makeJsonServerQuery(query as any);
				}
				return resource;
			},
			transformResponse: (items: Item[], meta) => {
				// TODO: Filters don't affect X-Total-Count. Fix later
				const totalCount = parseInt(meta!.response!.headers.get("X-Total-Count") || '') ;
				return {
					result: items,
					count: totalCount,
				};
			},
		}),

		getTags: builder.query<Record<string, number>, void>({
			query: () => `tags`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetItemsQuery, useGetTagsQuery } = itemsApi;

