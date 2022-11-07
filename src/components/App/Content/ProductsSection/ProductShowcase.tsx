import { Item } from "../../../../core/models/item";
import { useAppDispatch } from "../../../../redux/hooks";
import { addItemToCart } from "../../../../redux/slices/cart";
import { Price } from "../../../shared/Price/Price";

export function ProductShowcase({ item }: ProductShowcaseProps) {
	const dispatch = useAppDispatch();
	
	const handleAddBtnClick = () => {
		dispatch(addItemToCart({ name: item.name, price: item.price }))
	}

	return (
		<div className="flex flex-col h-210px w-120px">
			<div className="border-purple-light-2 border-2 bg-white-dark h-120px w-120px p-3 rounded-xl">
				<img className="h-full w-full" src="./favicon.ico" alt="" />
			</div>
			<div className="flex flex-col flex-grow">
				<div className="flex-grow">
					<Price
						currencyIcon="TRY"
						value={item.price}
						className="text-blue-light font-semibold"
					/>
					<div className="font-semibold">
						{item.name}
					</div>
				</div>
				<button
					onClick={handleAddBtnClick}
					className="bg-blue-light text-12px text-white text-center w-full rounded-sm"
				>
					Add
				</button>
			</div>
		</div>
	);
}

export interface ProductShowcaseProps {
	item: Item
}