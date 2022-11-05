import { useState } from "react";

export function RadioList<ValueType>({
	display,
	checkedId,
	items,
	onChange,
}: RadioListProps<ValueType>) {
	display = display ?? "block";

	if (!items.length) throw new Error("options cannot be empty");

	const chkId = checkedId ?? items[0].id;

	const [radioItems, setItems] = useState<RadioItem<ValueType>[]>(
		items.map((o) => ({
			checked: chkId === o.id,
			id: o.id,
			label: o.label,
			value: o.value,
		}))
	);

	const handleClick = (clickedItem: RadioItem<ValueType>) => {
		setItems(
			items.map((item) => ({
				...item,
				checked: item.id === clickedItem.id,
			}))
		);
		onChange && onChange({ index: clickedItem.id, value: clickedItem.value });
	};

	return (
		<>
			{radioItems.map((item, index) => (
				<div key={index}>
					<label>
						<input
							type="radio"
							checked={item.checked}
							onChange={(e) => console.log(e)}
							onClick={() => handleClick(item)}
						/>
						{item.label}
					</label>
					{display === "block" && <br />}
				</div>
			))}
		</>
	);
}

export interface RadioNewSelection<ValueType> {
	id?: number;
	value: ValueType
};

export interface RadioListProps<ValueType> {
	items: {
		id: number;
		label: string;
		value: ValueType;
	}[];
	checkedId?: number;
	display?: 'inline' | 'block'
	onChange?: (newSelection: { index: number; value: ValueType }) => void;
}

interface RadioItem<ValueType> {
	id: number;
	label: string;
	value: ValueType;
	checked: boolean;
}
