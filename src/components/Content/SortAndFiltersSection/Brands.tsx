
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetBrandsQuery } from "../../../redux/apis/companies";
import { Filter, FilterItem } from "../../shared/Filter";
import { WhiteBoxContainer } from "../../shared/WhiteBoxContainer";

export function Brands() {
	const { data } = useGetBrandsQuery();

	const [searchParams, setSearchParams] = useSearchParams();
	const [activeBrands, setActiveBrands] = useState(
		new Set((searchParams.get("b")?.split(",") || []))
	);

	const filterItems = useMemo<FilterItem[]>(
		() =>
			data
				? Object.keys(data).map((tagName) => ({
						name: tagName,
						count: data[tagName],
						checked: activeBrands.has(tagName),
				  }))
				: [],
		[data, activeBrands]
	);

	const handleFilterChanges = (checkedIndexes: Set<number>) => {
		const selectedBrandNames = Array.from(checkedIndexes).map(index => filterItems[index].name)
		selectedBrandNames.length
			? searchParams.set("b", selectedBrandNames.join(','))
			: searchParams.delete("b");
	
		setSearchParams(searchParams);
		setActiveBrands(
			new Set(searchParams.get("b")?.split(",") || [])
		);
	}

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
						onCheckedFiltersChanged={handleFilterChanges}
					/>
				</WhiteBoxContainer>
			</div>
		</>
	);
}
