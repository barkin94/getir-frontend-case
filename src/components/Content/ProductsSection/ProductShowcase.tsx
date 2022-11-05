import { Item } from "../../../core/models/item";
import { useAppDispatch } from "../../../redux/hooks";
import { addItemToCart } from "../../../redux/slices/cart";
import { Price } from "../../shared/Price";

export function ProductShowcase({ item }: ProductShowcaseProps) {
	const dispatch = useAppDispatch();
	
	const handleAddBtnClick = () => {
		dispatch(addItemToCart({ name: item.name, price: item.price }))
	}

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
			<button
				onClick={handleAddBtnClick}
				className="bg-blue-light text-white text-center w-full"
			>
				Add
			</button>
		</div>
	);
}

export interface ProductShowcaseProps {
	item: Item
}