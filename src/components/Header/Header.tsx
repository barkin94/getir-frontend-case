import styles from './Header.module.scss'

const { container } = styles;

export function Header() {
	return (
    <div className={`${container} vertical-and-horizontal-center`}>
      <img src="./Logo.png" alt="" />
    </div>
  );
}