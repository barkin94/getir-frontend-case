import ReactPaginate from "react-paginate";

export function Pagination({ pageCount, onPageChange, activePage }: PaginationProps) {
	const handlePageChange = (result: { selected: number }) => {
		onPageChange(result.selected)
	}

	return (
		<ReactPaginate
			className="flex h-5 items-center"
			pageLinkClassName="px-3 py-2"
			nextClassName="ml-4"
			previousClassName="mr-4"
			activeClassName="bg-blue-light text-white"
			forcePage={activePage}
			breakLabel="..."
			onPageChange={handlePageChange}
			pageCount={pageCount}
			
			nextLabel={
				<div className="flex">
					<img src="./arrow-right.png" className="mr-3" alt="" />
					<span>Next</span>
				</div>
			}
			previousLabel={
				<div className="flex">
					<img src="./arrow-left.png" className="mr-3" alt="" />
					<span className="text-blue-light">Prev</span>
				</div>
			}
			renderOnZeroPageCount={null as any}
		/>
	);
}

export interface PaginationProps {
	activePage?: number;
	pageCount: number;
	onPageChange: (newPage: number) => void;
}