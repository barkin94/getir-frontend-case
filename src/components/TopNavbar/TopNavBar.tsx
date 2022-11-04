import styles from './TopNavBar.module.scss'

const { container } = styles;

export function TopNavBar() {
	return (
    <div className={`${container} vertical-and-horizontal-center`}>
      <img src="./Logo.png" alt="" />
    </div>
  );
}