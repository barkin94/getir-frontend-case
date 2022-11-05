import { Item } from "../../../core/models/item";
import { useGetItemsQuery } from "../../../redux/apis/items";
import { useAppDispatch } from "../../../redux/hooks";
import { Filter } from "../../shared/Filter";

export function Brands() {
	const dispatch = useAppDispatch();
	const { data, error, isLoading } = useGetItemsQuery();

	return (
		<div>
			<div className="text-13px text-blueish-dark-grey">Brands</div>
			<div className="box-container">
				<Filter<Item> data={data || []} filterField={"manufacturer"}  />
			</div>
		</div>
	);
}
