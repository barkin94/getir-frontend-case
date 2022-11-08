import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const companiesApi = createApi({
	reducerPath: "companiesApi",
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASEURL || "http://localhost:3001" }),
	endpoints: (builder) => ({
		getBrands: builder.query<Record<string, number>, void>({
			query: () => `brands`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBrandsQuery } = companiesApi;
