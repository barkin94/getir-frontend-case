import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { setCartModalVisibility } from "../../../../redux/slices/cart";
import { Price } from "../../../shared/Price/Price";
import { WhiteBoxContainer } from "../../../shared/WhiteBoxContainer";
import { CartItem } from "./CartItem";

export function Cart() {
	const { items, totalCost } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	return (
		<div
			data-testid="cart-modal"
			onMouseEnter={() => dispatch(setCartModalVisibility(true))}
			onMouseLeave={() => dispatch(setCartModalVisibility(false))}
		>
			<WhiteBoxContainer>
				{items.length > 0 && (
					<>
						{items.map((item, index) => (
							<>
								<CartItem index={index} item={item} />
								<hr className="mb-4"></hr>
							</>
						))}
						<div className="flex flex-row-reverse">
							<div className="border-2 px-3 py-2 border-blue-light">
								<Price
									className="text-blue-light"
									currencyIcon="TRY"
									value={totalCost}
								/>
							</div>
						</div>
					</>
				)}
				{items.length === 0 && <div> Cart is empty.</div>}
			</WhiteBoxContainer>
		</div>
	);
}
