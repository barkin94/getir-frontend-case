export function CheckBox({
	label,
	checked,
	onClick,
}: CheckBoxProps) {

	// TODO: fix type
	const handleChange = (event: any) => {
		event.preventDefault();
		onClick();
	};

	return (
		<label className="text-grey-dark-2">
			<input type="checkbox" checked={checked} onChange={handleChange} />
			{label}
		</label>
	);
}

export interface CheckBoxProps {
	label: string | JSX.Element;
	checked: boolean;
	onClick: () => void;
}
