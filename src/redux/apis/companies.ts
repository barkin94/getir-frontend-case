import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Company } from "../../core/models/company";

// Define a service using a base URL and expected endpoints
export const companiesApi = createApi({
	reducerPath: "companiesApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
	endpoints: (builder) => ({
		getCompanies: builder.query<Company[], void>({
			query: (name) => `companies`,
		}),
	}),

});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCompaniesQuery } = companiesApi;
