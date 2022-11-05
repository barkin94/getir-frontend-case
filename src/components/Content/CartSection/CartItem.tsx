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
		<div className="flex">
			<div className="flex-grow">
				<div>{item.name}</div>
				<Price currency="TRY" value={item.price} />
			</div>
			<div>
				<span
					className="cursor-pointer"
					onClick={() => handleItemRemove(index)}
				>
					-
				</span>
				<span>{item.count}</span>
				<span
					className="cursor-pointer"
					onClick={() => handleItemAdd(index)}
				>
					+
				</span>
			</div>
		</div>
	);
}

export interface CartItemProps {
	item: CartItemDetail,
	index: number
}