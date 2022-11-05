import { Item } from "../../../core/models/item";
import { Price } from "../../shared/Price";

export function ProductShowcase({ item }: ProductShowcaseProps) {
	return (
		<div className="h-200px">
			<div className="border-purple-light-2 border-2 bg-white-dark h-115px p-3">
				<img className="h-full w-full" src="./favicon.ico" alt="" />
			</div>
			<Price
				currency="TRY"
				value={item.price}
				className="text-blue-light"
			/>
			<div>{item.name}</div>
			<button className="bg-blue-light text-white text-center w-full">
				Add
			</button>
		</div>
	);
}

export interface ProductShowcaseProps {
	item: Item
}