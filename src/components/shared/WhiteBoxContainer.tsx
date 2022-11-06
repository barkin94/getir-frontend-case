import { PropsWithChildren } from "react";

export function WhiteBoxContainer({ children }: PropsWithChildren) {
	return (
		<div className="bg-white px-7 py-5 rounded-sm shadow-sm h-full">
			{children}
		</div>
	);
}
