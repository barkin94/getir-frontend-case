import { useSearchParams } from "react-router-dom";
import { SortingOptions } from "../../../redux/helpers";

import {
	RadioList,
	RadioNewSelection,
	RadioListProps,
} from "../../shared/RadioList";
import { WhiteBoxContainer } from "../../shared/WhiteBoxContainer";

export function Sorting() {
	const [searchParams, setSearchParams] = useSearchParams();

	const sortingOptions: RadioListProps<SortingOptions>["items"] = [
		{
			id: 1,
			label: "Price low to high",
			value: { type: "asc", field: "price" },
		},
		{
			id: 2,
			label: "Price high to low",
			value: { type: "desc", field: "price" },
		},
		{ id: 3, label: "New to old", value: { type: "asc", field: "added" } },
		{ id: 4, label: "Old to new", value: { type: "desc", field: "added" } },
	];

	const activeSortType = searchParams.get("s_type") ?? "";
	const activeSortField = searchParams.get("s_field") ?? "";

	const checkedRadioId = sortingOptions.find(({ value }) => {
		return value.field === activeSortField && value.type === activeSortType;
	})?.id;

	const handleSelection = ({ value }: RadioNewSelection<SortingOptions>) => {
		searchParams.set("s_type", value.type)
		searchParams.set("s_field", value.field.toString())
		setSearchParams(searchParams);
	};

	return (
		<>
			<div className="text-13px text-grey-dark-blueish font-semibold mb-2">
				Sorting
			</div>
			<WhiteBoxContainer>
				<RadioList<SortingOptions>
					items={sortingOptions}
					onChange={handleSelection}
					checkedId={checkedRadioId}
				/>
			</WhiteBoxContainer>
		</>
	);
}
