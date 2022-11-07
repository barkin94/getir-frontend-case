import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function ProductTypeSelection() {
	const [searchParams, setSearchParams] = useSearchParams();
	const activeProductType = searchParams.get("p_type") ?? "";

	// TODO: fetch from server
	const [types] = useState(["mug", "shirt"]);
	const [activeTypeIndex, setActiveTypeIndex] = useState(
		activeProductType
			? types.indexOf(activeProductType)
			: 0
	);

	useEffect(() => {
		setSearchParams((prev) => {
			prev.set("p_type", types[activeTypeIndex]);
			return prev;
		});
	}, [activeTypeIndex, setSearchParams, types]);

	const getClassName = (index: number) => {
		let className = 'mr-2 rounded-sm py-2 px-3 font-semibold ';

		className +=
			index === activeTypeIndex
				? "bg-blue-light text-white"
				: "bg-purple-light-1 text-blue-light";

		return className;
	}

	return (
		<>
			{types.map((type, index) => (
				<button
					key={index}
					className={getClassName(index)}
					onClick={() => setActiveTypeIndex(index)}
				>
					{type}
				</button>
			))}
		</>
	);
}
