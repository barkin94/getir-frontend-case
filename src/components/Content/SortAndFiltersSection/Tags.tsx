import { useCallback, useEffect, useMemo, useState } from "react";
import { useGetTagsQuery } from "../../../redux/apis/items";
import { Filter, FilterItem } from "../../shared/Filter";
import { WhiteBoxContainer } from "../../shared/WhiteBoxContainer";

export function Tags() {
	const { data } = useGetTagsQuery();

	const filterItems = useMemo<FilterItem[]>(
		() =>
			data
				? Object.keys(data).map((tagName) => ({
						name: tagName,
						count: data[tagName],
				  }))
				: [],
		[data]
	);

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
					/>
				</WhiteBoxContainer>
			</div>
		</>
	);
}
