import { useEffect } from "react";
import { Item } from "../../../../core/models/item";
import { useGetItemsQuery } from "../../../../redux/apis/items";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { CheckBox } from "../../../shared/CheckBox";
import { Filter } from "../../../shared/Filter.tsx/Filter";
import { Input } from "../../../shared/Input";

export function Brands() {
	const dispatch = useAppDispatch();
	const { data, error, isLoading } = useGetItemsQuery();

	return (
		<div>
			<div className="text-size-13px text-blueish-dark-grey">Brands</div>
			<div className="box-container">
				<Filter<Item> data={data || []} filterField={"manufacturer"}  />
			</div>
		</div>
	);
}
