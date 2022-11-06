
export function makeJsonServerQuery({
	filters,
	sorting,
	pagination,
}: GenericQuery<unknown>) {
	let queryString = "";

	if (filters || sorting || pagination) queryString += "?";

	if (filters) {
		filters.forEach(({ field, value }) => {
			queryString += `${field}=${value}&`;
		});
	}

	if (sorting) {
		queryString += `_sort=${sorting.field}&_order=${sorting.type}&`;
	}

	if (pagination) {
		const start = pagination.page * pagination.limit;
		queryString += `_start=${start}&_limit=${pagination.limit}&`;
	}

	return queryString;
}

export interface GenericQuery<T> {
	pagination?: PagingOptions;
	sorting?: SortingOptions<T>;
	filters?: FilterOptions<T>[];
}

export interface GenericPagingResponse<T> {
	result: T[],
	count: number
}

export interface SortingOptions<T = any> {
	type: "asc" | "desc";
	field: keyof T;
}

export interface FilterOptions<T = any> {
	field: keyof T;
	value: string;
}

export interface PagingOptions {
	page: number;
	limit: number;
}

