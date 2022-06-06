import Link from 'next/link';
import React from 'react';
import styles from './Hero.module.scss';
import TradeCard from './TradeCard';
const Hero = () => {
	return (
		<div className={styles.container}>
			<h1>Take the guesswork out of tracking your trades.</h1>
			<Link href="https://chrome.google.com/webstore/detail/trade-tracker/hapjmenlcmfbcnahgdjmcmoihhmlfbnn">
				Add to chrome
			</Link>

			{/* <video autoPlay muted loop className={styles.video}>
				<source src="./trade-card.mp4" type="video/mp4" />
			</video> */}
			<TradeCard />
		</div>
	);
};

export default Hero;
