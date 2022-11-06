import { useGetItemsQuery } from "../../../redux/apis/items";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPagination } from "../../../redux/slices/products";
import { Pagination } from "../../shared/Pagination";
import { WhiteBoxContainer } from "../../shared/WhiteBoxContainer";
import { ProductShowcase } from "./ProductShowcase";

export function ProductsSection() {
	const ITEMS_PER_PAGE = 16;
	
	const dispatch = useAppDispatch();
	const { sorting, pagination } = useAppSelector(state => state.products)
	const { data } = useGetItemsQuery({
		sorting,
		pagination
	});

	const handlePageChange = (newPage: number) => {
		dispatch(setPagination({ ...pagination, page: newPage} as any));
	} 
	
	return (
		<div>
			<div className="text-grey-dark-1 text-20px mb-4">Products</div>
			<div>
				<button className="mr-4">btn1</button>
				<button className="">btn2</button>
			</div>
			<WhiteBoxContainer>
				{data && (
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
				<div className="flex justify-center">
					<Pagination
						activePage={pagination?.page}
						pageCount={Math.ceil(data.count / ITEMS_PER_PAGE)}
						onPageChange={handlePageChange}
					/>
				</div>
			)}
		</div>
	);
}
