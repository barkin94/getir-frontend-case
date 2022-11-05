
export function Price({ currency, value, className }: PriceProps) {
	const currencies: Record<Currency, string> = {
		TRY: '₺',
		USD: '$'
	}
	return <div className={className}>{`${currencies[currency]} ${value}`}</div>;
}

export interface PriceProps {
	currency: Currency,
	value: number;
	className?: string;
}

export type Currency = 'TRY' | 'USD'