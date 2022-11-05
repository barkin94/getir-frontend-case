import { Item } from "../../../core/models/item";
import { useGetItemsQuery } from "../../../redux/apis/items";
import { Filter } from "../../shared/Filter";

export function Brands() {
	const { data, error, isLoading } = useGetItemsQuery();

	return (
		<div>
			<div className="text-13px text-grey-dark-blueish">Brands</div>
			<div className="box-container">
				<Filter<Item> data={data || []} filterField={"manufacturer"}  />
			</div>
		</div>
	);
}
