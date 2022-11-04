import styles from './Footer.module.scss';

const { container, dot } = styles;

export function Footer() {
	return (
    <div className={`${container} vertical-and-horizontal-center text-light-blue text-size-13px`}>
      <span>©2019 Market</span>
      <span className={dot}>•</span>
      <span>Privacy Policy</span>
    </div>
  );
}