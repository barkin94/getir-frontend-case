
import { Brands } from "./Brands";
import { Sorting } from "./Sorting";
import { Tags } from "./Tags";

export function SortAndFiltersSection() {
	return (
		<>
			<section className="mb-5">
				<Sorting />
			</section>
			<section className="mb-5">
				<Brands />
			</section>
			<section className="mb-5">
				<Tags />
			</section>
		</>
	);
}