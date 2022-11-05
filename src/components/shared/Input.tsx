export function Input({ placeholder, onChange }: InputProps) {
	const handleChange = (event: any) => {
		onChange && onChange(event.target.value);
	};

	return <input
		type="text"
		onChange={handleChange}
		placeholder={placeholder}
	/>;
}

interface InputProps {
	placeholder?: string;
	onChange?: (text: string) => void,
}