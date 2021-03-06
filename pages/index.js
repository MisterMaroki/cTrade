/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Showcase from '../components/Showcase/Showcase';
import Features from '../components/Features/Features';
import GetStarted from '../components/GetStarted/GetStarted';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>cTrade - Home</title>
				<meta name="description" content="cTrade Tracker Home Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Hero />
			<Showcase />
			<Features />
			<GetStarted />
			{/* <video autoPlay muted loop className={styles.video}>
				<source src="./vid.mp4" type="video/mp4" />
			</video> */}
		</div>
	);
}
