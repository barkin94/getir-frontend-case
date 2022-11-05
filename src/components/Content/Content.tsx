import styles from './Content.module.scss';
import { SortAndFiltersSection } from './SortAndFiltersSection/SortAndFiltersSection';

const { container } = styles;

export function Content() {
	return (
    <div className={container}>
      <SortAndFiltersSection />
    </div>
  );
}