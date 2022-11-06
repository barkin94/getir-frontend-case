import { useAppDispatch } from "../../../redux/hooks";
import { CartItemDetail, decreaseItemCountByIndex, increaseItemCountByIndex } from "../../../redux/slices/cart"
import { Price } from "../../shared/Price";

export function CartItem({ item, index }: CartItemProps) {
	const dispatch = useAppDispatch();

	const handleItemRemove = (index: number) => {
		dispatch(decreaseItemCountByIndex(index));
	};

	const handleItemAdd = (index: number) => {
		dispatch(increaseItemCountByIndex(index));
	};

	return (
		<div className="flex mb-4">
			<div className="flex-grow">
				<div>{item.name}</div>
				<Price
					currencyIcon="TRY"
					value={item.price}
					className="text-blue-light"
				/>
			</div>
			<div className="flex items-center">
				<span
					className="cursor-pointer text-blue-light text-2xl"
					onClick={() => handleItemRemove(index)}
				>-</span>
				<span className="ml-2 bg-blue-light text-white py-1 px-2">
					{item.count}
				</span>
				<span
					className="cursor-pointer ml-2 text-blue-light text-2xl"
					onClick={() => handleItemAdd(index)}
				>+</span>
			</div>
		</div>
	);
}

export interface CartItemProps {
	item: CartItemDetail,
	index: number
}