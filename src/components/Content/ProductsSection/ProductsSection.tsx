import { useEffect, useState } from "react";
import { Item } from "../../../core/models/item";
import { useGetItemsQuery } from "../../../redux/apis/items";
import { Pagination } from "../../shared/Pagination";
import { ProductShowcase } from "./ProductShowcase";

export function ProductsSection() {
	const ITEMS_PER_PAGE = 16;

	const { data } = useGetItemsQuery();
	const [activePage, setActivePage] = useState(0);
	const [pageCount, setPageCount] = useState(0);
	const [displayedItems, setDisplayedItems] = useState<Item[]>([]);

	useEffect(() => {
		if (!data || !data.length) {
			setDisplayedItems([]);
			setPageCount(0);
		}
		else {
			setPageCount(data.length / ITEMS_PER_PAGE);
			const startIndex = ITEMS_PER_PAGE * activePage;
			const endIndex = startIndex + ITEMS_PER_PAGE;
			setDisplayedItems(data.slice(startIndex, endIndex));
		}
		
	}, [activePage, data])


	const handlePageChange = (newPage: number) => {
		setActivePage(newPage);
	} 
	
	return (
		<div>
			<div className="text-grey-dark-1 text-20px mb-4">Products</div>
			<div>
				<button className="mr-4">btn1</button>
				<button className="">btn2</button>
			</div>
			<div className="box-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{displayedItems.map((item) => (
					<ProductShowcase item={item} />
				))}
			</div>
			<Pagination
				activePage={activePage}
				pageCount={pageCount}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}
