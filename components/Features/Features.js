import { Button } from '@mui/material';
import { LockOutlined, NewReleasesOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './Features.module.scss';
const Features = () => {
	// const isMobile = window.innerWidth < 768;
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			//here `window` is available
			window.innerWidth < 768 && setIsMobile(true);
			// setIsMobile(() => window.innerWidth < 768);
		}
	}, []);

	return (
		<div className={styles.container}>
			<h2>
				#1 Chrome Extension for
				<br /> Journaling & Analytics
			</h2>
			<motion.div
				whileInView={{ opacity: [0, 1], x: [50, 0] }}
				transition={{
					duration: 0.5,
					delay: 0.3,
					ease: 'easeInOut',
				}}
				className={styles.gridContainer}
			>
				<div className={styles.gridItem}>
					<h6>See your true performance</h6>
					<p>
						We, unlike exchanges, maintain a record of all your closed trades
						for you. This gives us the capability to perform detailed analytics
						and conjure data otherwise unavailable to traders. Including
						community data
					</p>
					<Button color="secondary">Learn more</Button>
				</div>
				<div className={styles.gridItem}>
					<h6>Don&apos;t miss trades</h6>
					<p>
						The app we have built lays rest in your google chrome new tab
						window. So, every time you open a new tab, is now an opportunity to
						check current positions; or to scan your watchlist for coins with
						upcoming volatility.
					</p>
					<Button color="secondary">Learn more</Button>
				</div>
				<div className={styles.gridItem}>
					<h6>Stay in the know</h6>
					<p>
						We had some of the top traders in the world tracking accounts with
						us during our beta, we can compare how you trade against top
						traders. We also account for this information when calculating our
						leaderboards.
					</p>
					<Button color="secondary">Learn more</Button>
				</div>
				<div className={styles.gridItem}>
					<h6>Be a part of development</h6>
					<p>
						We’re always open to feedback on our product and being #1 is
						incredibly important. We offer this product for free in return for
						you harshest feedback. Tweet it, share it, shout it aloud! Just make
						sure you tag us...
					</p>
					<Button color="secondary">Learn more</Button>
				</div>
			</motion.div>
			<div className={styles.row}>
				<div className={styles.col}>
					<div className={styles.icon}>
						<LockOutlined />
					</div>
					<h6>Bitcoin & all it’s children</h6>
					<p>
						We keep track of the latest data feeds on price, volume, and
						strength for the top 300 cryptocurrencies.
					</p>
				</div>
				<motion.div
					whileInView={{ opacity: [0, 1], x: isMobile ? 0 : [500, 0] }}
					transition={{
						duration: 0.5,
						delay: 0.3,
						ease: 'easeInOut',
					}}
					className={styles.imgBox}
				>
					<Image
						src={'/coincards.png'}
						alt="image"
						layout="fill"
						objectFit={isMobile ? 'contain' : 'cover'}
						style={{ borderRadius: '10px' }}
					/>
				</motion.div>
			</div>
			<div className={styles.row}>
				<motion.div
					whileInView={{ opacity: [0, 1], x: isMobile ? 0 : [-500, 0] }}
					transition={{
						duration: 0.5,
						delay: 0.3,
						ease: 'easeInOut',
					}}
					className={styles.imgBox}
				>
					<Image
						src={'/tradecard.png'}
						alt="image"
						layout="fill"
						objectFit="contain"
						style={{ borderRadius: '10px' }}
					/>
				</motion.div>
				<div className={styles.col}>
					<div className={styles.icon}>
						<NewReleasesOutlined />
					</div>
					<h6>True functionality is coming</h6>
					<p>
						We aim to integrate in-app real orders very soon. Including both
						market and limit orders; TP/SL; and much more data to become
						available.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Features;
