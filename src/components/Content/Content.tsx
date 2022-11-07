import { ProductsSection } from "./ProductsSection/ProductsSection";
import { SortAndFiltersSection } from "./SortAndFiltersSection/SortAndFiltersSection";

export function Content() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-8 mx-16">
			<section className="md:col-span-1 lg:col-span-1">
				<SortAndFiltersSection />
			</section>
			<section className="md:col-span-2 lg:col-span-3">
				<ProductsSection />
			</section>
		</section>
	);
}
