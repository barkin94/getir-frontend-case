import { useAppSelector } from "../../../redux/hooks";
import { Price } from "../../shared/Price";
import { CartItem } from "./CartItem";

export function CartSection() {
	const { items, totalCost } = useAppSelector((state) => state.cart);

	return (
		<div className="">
			{items.length > 0 && (
				<>
					{items.map((item, index) => (
						<>
							<CartItem index={index} item={item} />
							<hr></hr>
						</>
					))}
					<Price
						className="float-right"
						currency="TRY"
						value={totalCost}
					/>
				</>
			)}
			{items.length === 0 && <div> Cart is empty.</div>}
		</div>
	);
}
