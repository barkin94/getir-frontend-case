import { useAppSelector } from "../redux/hooks";
import { Price } from "./shared/Price";

export function Header() {
	const totalCost = useAppSelector(state => state.cart.totalCost);

	return (
		<div className="relative flex items-center justify-center bg-blue-light h-76px">
			<img className="h-40px" src="./Logo.png" alt="" />

			{totalCost !== 0 && (
				<div className="absolute right-28 h-full text-white bg-blue-dark font-semibold">
					<div className="flex items-center justify-center">
						<img src="./basket.png" alt="" />
						<Price
							value={totalCost}
							currencyIcon="TRY"
							className="inline"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
