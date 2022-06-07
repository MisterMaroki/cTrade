import { Button } from '@mui/material';
import React from 'react';
import styles from './Features.module.scss';
const Features = () => {
	return (
		<div className={styles.container}>
			<h2>
				#1 Chrome Extension for
				<br /> Journaling & Analytics
			</h2>

			<div className={styles.gridContainer}>
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
			</div>
		</div>
	);
};

export default Features;
