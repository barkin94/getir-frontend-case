import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setCartModalVisibility } from "../../../redux/slices/cart";
import { Cart } from "./Cart/Cart";
import { Price } from "../../shared/Price";

export function Header() {
	const { totalCost, modalVisible} = useAppSelector(state => state.cart);
	const dispatch = useAppDispatch();

	return (
		<div className="relative flex items-center justify-center bg-blue-light h-76px">
			<img className="h-40px" src="./Logo.png" alt="" />
			<div
				onMouseEnter={() => dispatch(setCartModalVisibility(true))}
				onMouseLeave={() => dispatch(setCartModalVisibility(false))}
				style={{ width: 100 }}
				className={`
				absolute right-0 md:right-28  h-full text-white
				bg-blue-dark font-semibold flex
				items-center justify-center
				cursor-pointer`}
			>
				<img src="./cart.png" alt="" />
				<Price
					value={totalCost}
					currencyIcon="TRY"
					className="inline"
				/>
			</div>
			<div
				style={{ top: 76, minWidth: 312 }}
				className="absolute right-28"
			>
				{modalVisible && <Cart />}
			</div>
		</div>
	);
}
