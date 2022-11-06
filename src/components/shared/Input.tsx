export function Input({ placeholder, onChange }: InputProps) {
	const handleChange = (event: any) => {
		onChange && onChange(event.target.value);
	};

	return <input
		type="text"
		className="border-2 rounded-sm w-full p-2 border-grey-light-3 placeholder-grey-dark-1"
		onChange={handleChange}
		placeholder={placeholder}
	/>;
}

interface InputProps {
	placeholder?: string;
	onChange?: (text: string) => void,
}