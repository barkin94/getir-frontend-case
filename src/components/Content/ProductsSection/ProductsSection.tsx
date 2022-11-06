import { useSearchParams } from "react-router-dom";
import { useGetItemsQuery } from "../../../redux/apis/items";
import { Pagination } from "../../shared/Pagination";
import { WhiteBoxContainer } from "../../shared/WhiteBoxContainer";
import { ProductShowcase } from "./ProductShowcase";
import { ProductTypeSelection } from "./ProductTypeSelection";

export function ProductsSection() {
	const ITEMS_PER_PAGE = 16;

	const [searchParams, setSearchParams] = useSearchParams();
	
	const activePage = parseInt(searchParams.get("p") ?? "")
	const activeSortType = searchParams.get("s_type") ?? "";
	const activeSortField = searchParams.get("s_field") ?? "";
	const activeProductType = searchParams.get("p_type") ?? "";
	

	const { data } = useGetItemsQuery({
		sorting: {
			// TODO: fix types
			field: activeSortField as any,
			type: activeSortType as any,
		},
		pagination: {
			page: activePage,
			limit: ITEMS_PER_PAGE,
		},
		filters: [
			{ field: 'itemType' as any, value: activeProductType },
		],
	});

	const handlePageChange = (newPage: number) => {
		searchParams.set("p", newPage.toString());
		setSearchParams(searchParams)
	} 
	
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
						activePage={activePage}
						pageCount={Math.ceil(data.count / ITEMS_PER_PAGE)}
						onPageChange={handlePageChange}
					/>
				</div>
			)}
		</div>
	);
}
