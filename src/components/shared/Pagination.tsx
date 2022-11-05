import ReactPaginate from "react-paginate";

export function Pagination({ pageCount, onPageChange, activePage }: PaginationProps) {
	const handlePageChange = (result: { selected: number }) => {
		onPageChange(result.selected)
	}

	return (
		<ReactPaginate
			className="flex h-40px items-center"
			pageLinkClassName="p-12px"
			activeClassName="bg-blue-light text-white"
			forcePage={activePage}
			breakLabel="..."
			nextLabel="next >"
			onPageChange={handlePageChange}
			pageCount={pageCount}
			previousLabel="< previous"
			renderOnZeroPageCount={null as any}
		/>
	);
}

export interface PaginationProps {
	activePage?: number;
	pageCount: number;
	onPageChange: (newPage: number) => void;
}