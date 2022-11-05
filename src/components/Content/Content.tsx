import { CartSection } from './CartSection/CartSection';
import { ProductsSection } from './ProductsSection/ProductsSection';
import { SortAndFiltersSection } from './SortAndFiltersSection/SortAndFiltersSection';

export function Content() {
	return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SortAndFiltersSection />
      <ProductsSection />
      <CartSection />
    </div>
  );
}