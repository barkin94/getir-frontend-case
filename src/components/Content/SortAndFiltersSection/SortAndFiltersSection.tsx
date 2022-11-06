
import { Brands } from "./Brands";
import { Sorting } from "./Sorting";
import { Tags } from "./Tags";

export function SortAndFiltersSection() {
	return (
		<section>
			<div className="mb-5">
				<Sorting />
			</div>
			<div className="mb-5">
				<Brands />
			</div>
			<div className="mb-5">
				<Tags />
			</div>
		</section>
	);
}