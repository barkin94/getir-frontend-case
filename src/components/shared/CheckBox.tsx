import { useState } from "react";

export function CheckBox({ label, onClick }: CheckBoxProps) {
	// TODO: fix type
	const [checked, setChecked] = useState(false);

	const handleChange = (event: any) => {
		setChecked(!checked);
		onClick();
	};

	return (
		<label className="text-grey-dark-2">
			<input type="checkbox" checked={checked} onChange={handleChange} />
			<span className="ml-3">{label}</span>
		</label>
	);
}

export interface CheckBoxProps {
	label: string | JSX.Element;
	onClick: () => void;
}
