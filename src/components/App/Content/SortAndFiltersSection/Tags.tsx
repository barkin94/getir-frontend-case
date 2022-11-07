import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetTagsQuery } from "../../../../redux/apis/items";
import { Filter, FilterItem } from "../../../shared/Filter";
import { WhiteBoxContainer } from "../../../shared/WhiteBoxContainer";

export function Tags() {
	const { data } = useGetTagsQuery();

	const [searchParams, setSearchParams] = useSearchParams();
	const [activeTags, setActiveTags] = useState(
		new Set(searchParams.get("b")?.split(",") || [])
	);

	const filterItems = useMemo<FilterItem[]>(
		() =>
			data
				? Object.keys(data).map((tagName) => ({
						name: tagName,
						count: data[tagName],
						checked: activeTags.has(tagName),
				  }))
				: [],
		[data, activeTags]
	);

	const handleFilterChanges = (checkedIndexes: Set<number>) => {
		const selectedBrandNames = Array.from(checkedIndexes).map(
			(index) => filterItems[index].name
		);
		selectedBrandNames.length
			? searchParams.set("b", selectedBrandNames.join(","))
			: searchParams.delete("b");

		setSearchParams(searchParams);
		setActiveTags(new Set(searchParams.get("b")?.split(",") || []));
	};

	return (
		<>
			<div className="text-13px text-grey-dark-blueish font-semibold mb-2">
				Tags
			</div>
			<div className="h-60">
				<WhiteBoxContainer>
					<Filter
						filterItems={filterItems}
						searchPlaceholder="Search tag"
						onCheckedFiltersChanged={handleFilterChanges}
					/>
				</WhiteBoxContainer>
			</div>
		</>
	);
}
