import { useEffect, useMemo, useState } from "react";
import { CheckBox } from "./CheckBox";
import { Input } from "./Input";

export function Filter({
	filterItems,
	searchPlaceholder,
	onFiltersChanged,
}: FilterProps) {
	const [displayedItems, setDisplayedItems] = useState<FilterItem[]>([]);
	const [checkedItems, setCheckedItems] = useState([]);


	const sortedFilterItems = useMemo(
		() => [...filterItems.sort((a, b) => b.count - a.count)],
		[filterItems]
	);

	useEffect(() => {
		setDisplayedItems([...sortedFilterItems]);
	}, [sortedFilterItems]);

	const handleCheckClick = (index: number) => {
		//onFiltersChanged && onFiltersChanged()
	};

	const handleAllCheckClick = () => {
		onFiltersChanged && onFiltersChanged([]);
	};

	const handleInputChange = (searchText: string) => {
		setDisplayedItems(
			sortedFilterItems.filter((s) =>
				s.name.match(new RegExp(searchText, "i"))
			)
		);
	};

	return (
		<div className="flex flex-col h-full">
			<div className="mb-3">
				<Input
					placeholder={searchPlaceholder}
					onChange={handleInputChange}
				/>
			</div>
			<div className="overflow-y-auto flex-grow h-full">
				<div className="mb-3">
					<CheckBox
						label="All"
						onClick={() => handleAllCheckClick()}
					/>
					<span className="text-grey-light-2 ml-1">{`(${sortedFilterItems.length})`}</span>
				</div>

				{displayedItems.map(({ name, count }, index) => (
					<div className="mb-3" key={index}>
						<CheckBox
							label={`${name}`}
							onClick={() => handleCheckClick(index)}
						/>
						<span className="text-grey-light-2 ml-1">{`(${count})`}</span>
					</div>
				))}
			</div>
		</div>
	);
}

export interface FilterProps {
	filterItems: FilterItem[];
	searchPlaceholder?: string;
	onFiltersChanged?: (currentlyCheckedFilters: FilterItem[]) => void
}

export interface FilterItem {
	name: string;
	count: number;
}
