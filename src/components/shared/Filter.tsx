import { useEffect, useMemo, useState } from "react";
import { CheckBox } from "./CheckBox";
import { Input } from "./Input";

export function Filter({
	filterItems,
	searchPlaceholder,
	onCheckedFiltersChanged,
}: FilterProps) {
	const sortedFilterItems = useMemo(
		() => [...filterItems.sort((a, b) => b.count - a.count)],
		[filterItems]
	);

	const [checkedIndexes, setCheckedIndexes] = useState(new Set<number>());
	
	useEffect(() => {
		const checkedIndexes = sortedFilterItems
			.filter(item => item.checked)
			.map((item, index) => index);
		
		setCheckedIndexes(new Set(checkedIndexes));
	}, [sortedFilterItems]);

	const [hiddenIndexes, setHiddenIndexes] = useState(new Set<number>());

	const handleCheckClick = (index: number, result: boolean) => {
		if (result) checkedIndexes.delete(index);
		else checkedIndexes.add(index);

		setCheckedIndexes(checkedIndexes);
		onCheckedFiltersChanged(checkedIndexes);
	};

	const handleAllCheckClick = () => {
		onCheckedFiltersChanged(new Set());
	};

	/**
	 * Saves the indexes of the items that doesn't match the text
	 * entered to the input, so they can be made invisible without
	 * losing their indexes
	 * @param searchText 
	 */
	const markNonMatchingItemIndexesAsHidden = (searchText: string) => {
		const nonMatchingItemIndexes: number[] = [];

		sortedFilterItems.forEach((item, index) => {
			if (!item.name.match(new RegExp(searchText, "i")))
				nonMatchingItemIndexes.push(index);
		});

		setHiddenIndexes(new Set(nonMatchingItemIndexes));
	};

	const makeCheckBoxLabel = (name: string, count: number) => {
		return (
			<>
				<span>{name}</span>
				<span className="text-grey-light-2 ml-1">{`(${count})`}</span>
			</>
		);
	}

	return (
		<div className="flex flex-col h-full">
			<div className="mb-3">
				<Input
					placeholder={searchPlaceholder}
					onChange={markNonMatchingItemIndexesAsHidden}
				/>
			</div>
			<div className="overflow-y-auto flex-grow h-full">
				<div className="mb-3">
					<CheckBox
						checked={false}
						label={makeCheckBoxLabel(
							"All",
							sortedFilterItems.length
						)}
						onClick={() => handleAllCheckClick()}
					/>
				</div>

				{sortedFilterItems.map(({ name, count, checked }, index) => (
					<div
						className={`mb-3 ${
							hiddenIndexes.has(index) && "hidden"
						}`}
						key={index}
					>
						<CheckBox
							checked={checked}
							label={makeCheckBoxLabel(name, count)}
							onClick={(result) =>
								handleCheckClick(index, result)
							}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export interface FilterProps {
	filterItems: FilterItem[];
	searchPlaceholder?: string;
	onCheckedFiltersChanged: (checkedIndexes: Set<number>) => void
}

export interface FilterItem {
	checked: boolean;
	name: string;
	count: number;
}
