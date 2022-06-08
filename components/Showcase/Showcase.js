import React from 'react';
import Carousel from './Carousel';
import styles from './Showcase.module.scss';
const Showcase = () => {
	return (
		<div className={styles.showcase}>
			<h2>Our integrated browser platform is your best new tool.</h2>
			<Carousel />
		</div>
	);
};

export default Showcase;
