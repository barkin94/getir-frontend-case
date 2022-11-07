import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Item } from "../../../core/models/item";
import { useGetItemsQuery } from "../../../redux/apis/items";
import { FilterOptions } from "../../../redux/helpers";
import { Pagination } from "../../shared/Pagination";
import { WhiteBoxContainer } from "../../shared/WhiteBoxContainer";
import { ProductShowcase } from "./ProductShowcase";
import { ProductTypeSelection } from "./ProductTypeSelection";

export function ProductsSection() {
	const ITEMS_PER_PAGE = 16;

	const [searchParams, setSearchParams] = useSearchParams();

	const page = parseInt(searchParams.get("p") ?? "");
	const sortType = searchParams.get("s_type") ?? "";
	const sortField = searchParams.get("s_field") ?? "";
	const activeProductType = searchParams.get("p_type") ?? "";
	const brands = searchParams.get("b")?.split(",") || [];

	const { data } = useGetItemsQuery({
		sorting: {
			// TODO: fix types
			field: sortField as any,
			type: sortType as any,
		},
		pagination: {
			page,
			limit: ITEMS_PER_PAGE,
		},
		filters: makeFiltersUsingQueryParams(),
	});

	const handlePageChange = (newPage: number) => {
		searchParams.set("p", newPage.toString());
		setSearchParams(searchParams)
	} 

	function makeFiltersUsingQueryParams(): FilterOptions<Item>[] {
		const filters: FilterOptions<Item>[] = [
			{ field: "itemType", value: activeProductType },
		];

		brands.forEach(b => {
			filters.push({
				field: "manufacturer",
				value: b,
			});
		})

		return filters;
	}; 
	
	return (
		<div>
			<div className="text-grey-dark-1 text-20px mb-4">Products</div>
			<div className="mb-4">
				<ProductTypeSelection />
			</div>
			<WhiteBoxContainer>
				{data && (
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
						{data.result.map((item, index) => (
							<ProductShowcase
								key={`${index}${Date.now()}`}
								item={item}
							/>
						))}
					</div>
				)}
			</WhiteBoxContainer>

			{data && (
				<div className="flex justify-center mt-8">
					<Pagination
						activePage={0}
						pageCount={Math.ceil(data.count / ITEMS_PER_PAGE)}
						onPageChange={handlePageChange}
					/>
				</div>
			)}
		</div>
	);
}
