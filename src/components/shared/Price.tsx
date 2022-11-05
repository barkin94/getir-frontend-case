
export function Price({ currencyIcon, value, className }: PriceProps) {
	const currencyIcons: Record<CurrencyIcon, string> = {
		TRY: "₺",
		USD: "$",
	};
	return (
		<div
			className={className}
		>{`${currencyIcons[currencyIcon]} ${value}`}</div>
	);
}

export interface PriceProps {
	currencyIcon: CurrencyIcon;
	value: number;
	className?: string;
}

export type CurrencyIcon = 'TRY' | 'USD'