export function CheckBox({ label, checked, onClick }: CheckBoxProps) {

	const handleClick = () => {
		onClick(checked);
	};

	return (
		<label
			className="text-grey-dark-2 cursor-pointer"
			onClick={handleClick}
		>
			<div className="flex items-center">
				<div
					className={`rounded-sm flex items-center justify-center ${
						checked && "bg-blue-light"
					}`}
					style={{
						margin: 5,
						height: 20,
						width: 20,
						minWidth: 20,
						boxShadow: "0px 1px 7px rgba(93, 56, 192, 0.4)",
					}}
				>
					<img src="./check.png" alt="" />
				</div>
				<span className="ml-2">{label}</span>
			</div>
		</label>
	);
}

export interface CheckBoxProps {
	checked: boolean;
	label: string | JSX.Element;
	onClick: (result: boolean) => void;
}
