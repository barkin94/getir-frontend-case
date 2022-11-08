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
				<div className={`flex ${display === "block" ? 'flex-col mb-2' : 'mr-2'}`} key={index}>
					<label
						className="flex items-center cursor-pointer"
						onClick={() => handleClick(item)}
					>
						<div
							className={`rounded-full flex items-center justify-center border-grey-light-3 border-2  ${
								item.checked && "border-blue-light"
							}`}
							style={{
								margin: 5,
								height: 22,
								width: 22,
								minWidth: 20,
							}}
						>
							{item.checked && (
								<img
									style={{ height: 9, marginTop: 2 }}
									src="./check-blue.png"
									alt=""
								/>
							)}
						</div>
						<span className="ml-3 text-grey-dark-2">
							{item.label}
						</span>
					</label>
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
