import { useAppDispatch } from "../../../redux/hooks";
import { setSorting, SortingOptions } from "../../../redux/slices/products";
import { RadioList, RadioNewSelection, RadioListProps } from "../../shared/RadioList";

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
		<div>
			<div className="text-13px text-blueish-dark-grey">Sorting</div>
			<div className="box-container">
				<RadioList<SortingOptions>
					items={sortingOptions}
					onChange={handleSelection}
				/>
			</div>
		</div>
	);
}
