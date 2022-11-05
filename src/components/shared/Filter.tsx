import { useEffect, useState } from "react";
import { CheckBox } from "./CheckBox";
import { Input } from "./Input";

export function Filter<DataType>({ data, filterField }: FilterProps<DataType>) {
	const [items, setItems] = useState<FilterItem[]>([]);
	
	useEffect(() => {
		const fieldNameToCountMap: Record<string, number> = {}
		
		data.forEach(item => {
			if (!fieldNameToCountMap[item[filterField] as string])
				fieldNameToCountMap[item[filterField] as string] = 0;
			
			fieldNameToCountMap[item[filterField] as string]++
		})

		if (Object.keys(fieldNameToCountMap).length === 0)
			return;
		const filterItems: FilterItem[] = [];
		
		Object.keys(fieldNameToCountMap).forEach((fieldName) => {
			filterItems.push({
				checked: false,
				name: fieldName,
				count: fieldNameToCountMap[fieldName],
			});
		});

		filterItems.sort((a, b) => b.count - a.count)
		filterItems.unshift({ checked: false, name: 'All', count: data.length })

		setItems(filterItems);
	}, [data, filterField])

	const handleCheckClick = (index: number) => {
		items[index] = { ...items[index], checked: !items[index].checked };
		setItems(items);
	}

	return (
		<>
			<Input />
			{items.map(({ checked, name, count }, index) => (
				<div key={index}>
					<CheckBox
						checked={checked}
						label={`${name}`}
						onClick={() => handleCheckClick(index)}
					/>
					<span className="text-grey-light-2">{`(${count})`}</span>
				</div>
			))}
		</>
	);
}

export interface FilterProps<DataType> {
	data: DataType[]
	filterField: (keyof DataType)
}

interface FilterItem {
	checked: boolean;
	name: string | JSX.Element;
	count: number;
}