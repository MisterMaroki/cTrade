import {
	AutoGraph,
	DownloadForOfflineOutlined,
	Person,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import styles from './GetStarted.module.scss';
const GetStarted = () => {
	return (
		<div className={styles.container}>
			<h2>Get Started In Just A Few Minutes</h2>
			<p>
				A few seconds to impact the rest of your trading career. Add the app to
				chrome, sign up, and start tracking your trades immediately.
			</p>
			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{
					duration: 0.5,
					delay: 0.3,
					ease: 'easeInOut',
				}}
				className={styles.row}
			>
				<motion.div
					whileInView={{ opacity: [0, 1], y: [-100, 0] }}
					transition={{
						duration: 0.5,
						delay: 0.5,
						ease: 'easeInOut',
					}}
				>
					<DownloadForOfflineOutlined />
					<h3>Add to chrome</h3>
				</motion.div>
				<motion.div
					whileInView={{ opacity: [0, 1], y: [-100, 0] }}
					transition={{
						duration: 0.5,
						delay: 0.7,
						ease: 'easeInOut',
					}}
				>
					<Person />
					<h3>Create an account</h3>
				</motion.div>
				<motion.div
					whileInView={{ opacity: [0, 1], y: [-100, 0] }}
					transition={{
						duration: 0.5,
						delay: 0.9,
						ease: 'easeInOut',
					}}
				>
					<AutoGraph />
					<h3>Start tracking</h3>
				</motion.div>
			</motion.div>
			<motion.div
				whileInView={{
					opacity: [0, 1],
				}}
				transition={{
					duration: 0.45,
					ease: 'easeInOut',
					delay: 1.2,
				}}
				animate={{
					x: 0,
					backgroundColor: '#070f0c',
					boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
				}}
			>
				<Link
					href="https://chrome.google.com/webstore/detail/trade-tracker/hapjmenlcmfbcnahgdjmcmoihhmlfbnn"
					style={{
						borderRadius: '10px',
						padding: '10px',
						backgroundColor: '#FFFFFF',
					}}
				>
					<Button>Add to chrome</Button>
				</Link>
			</motion.div>
		</div>
	);
};

export default GetStarted;
