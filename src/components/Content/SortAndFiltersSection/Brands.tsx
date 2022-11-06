
import { useMemo } from "react";
import { useGetBrandsQuery } from "../../../redux/apis/companies";
import { Filter, FilterItem } from "../../shared/Filter";
import { WhiteBoxContainer } from "../../shared/WhiteBoxContainer";

export function Brands() {
	const { data } = useGetBrandsQuery();

	const filterItems = useMemo<FilterItem[]>(() => data
		? Object.keys(data).map(tagName => ({
				name: tagName,
				count: data[tagName],
			}))
		: []
	, [data])

	return (
		<>
			<div className="text-13px text-grey-dark-blueish font-semibold mb-2">
				Brands
			</div>
			<div className="h-60">
				<WhiteBoxContainer>
					<Filter
						filterItems={filterItems}
						searchPlaceholder="Search brand"
					/>
				</WhiteBoxContainer>
			</div>
		</>
	);
}
