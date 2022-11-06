import { useAppDispatch } from "../../../redux/hooks";
import { setSorting, SortingOptions } from "../../../redux/slices/products";
import { RadioList, RadioNewSelection, RadioListProps } from "../../shared/RadioList";
import { WhiteBoxContainer } from "../../shared/WhiteBoxContainer";

export function Sorting() {
  const dispatch = useAppDispatch();
  
  const sortingOptions: RadioListProps<SortingOptions>["items"] = [
    { id: 1, label: "Price low to high", value: { type: "asc", field: "price" } },
    { id: 2, label: "Price high to low", value: { type: "desc", field: "price" } },
    { id: 3, label: "New to old", value: { type: "asc", field: "added" } },
    { id: 4, label: "Old to new", value: { type: "desc", field: "added" } },
  ];

  const handleSelection = (result: RadioNewSelection<SortingOptions>) => {
    dispatch(setSorting(result.value));
  };

	return (
		<>
			<div className="text-13px text-grey-dark-blueish font-semibold mb-2">Sorting</div>
			<WhiteBoxContainer>
				<RadioList<SortingOptions>
					items={sortingOptions}
					onChange={handleSelection}
				/>
			</WhiteBoxContainer>
		</>
	);
}
