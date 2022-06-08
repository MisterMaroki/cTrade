import Link from 'next/link';
import React, { useRef, useState } from 'react';
import styles from './Hero.module.scss';
import TradeCard from './TradeCard';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

const Hero = () => {
	return (
		<div className={styles.container}>
			<h1>Take the guesswork out of tracking your trades.</h1>
			<Box />
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

			{/* <video autoPlay muted loop className={styles.video}>
				<source src="./trade-card.mp4" type="video/mp4" />
			</video> */}
			<motion.div
				whileInView={{ y: [30, 0], opacity: [0, 1] }}
				transition={{
					duration: 0.45,
					ease: 'easeInOut',
					delay: 0.5,
				}}
				className={styles.motion}
			>
				<TradeCard />
			</motion.div>
		</div>
	);
};

export default Hero;

const Box = () => {
	const [mousePosition, setMousePosition] = useState({});
	const boxRef = useRef();
	const handleMouseMove = (e) => {
		setMousePosition(getRelativeCoordinates(e, boxRef.current));
	};
	return (
		<div style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
			<div
				ref={boxRef}
				style={{ ...css.box, perspective: 600 }}
				onMouseMove={(e) => handleMouseMove(e)}
			>
				<motion.div
					style={css.fly}
					animate={{
						x: mousePosition.x,
						y: mousePosition.y,
					}}
				/>
				<motion.div
					style={{ ...css.fly, backgroundColor: 'gold' }}
					animate={{
						x: mousePosition.x,
						y: mousePosition.y,
					}}
					transition={{ type: 'spring' }}
				/>
				<motion.div
					style={{ ...css.fly, backgroundColor: 'orange' }}
					animate={{
						x: mousePosition.x,
						y: mousePosition.y,
					}}
					transition={{ type: 'tween' }}
				/>
			</div>
		</div>
	);
};

function getRelativeCoordinates(event, referenceElement) {
	const position = {
		x: event.pageX,
		y: event.pageY,
	};

	const offset = {
		left: referenceElement.offsetLeft,
		top: referenceElement.offsetTop,
		width: referenceElement.clientWidth,
		height: referenceElement.clientHeight,
	};

	let reference = referenceElement.offsetParent;

	while (reference) {
		offset.left += reference.offsetLeft;
		offset.top += reference.offsetTop;
		reference = reference.offsetParent;
	}

	return {
		x: position.x - offset.left,
		y: position.y - offset.top,
		width: offset.width,
		height: offset.height,
		centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
		centerY:
			(position.y - offset.top - offset.height / 2) / (offset.height / 2),
	};
}
const css = {
	box: {
		backgroundColor: 'transparent',
		width: '100%',
		height: '100%',
		position: 'relative',
		zIndex: -1,
	},
	fly: {
		position: 'absolute',
		width: '20px',
		height: '20px',
		margin: '-10px',
		backgroundColor: 'red',
		borderRadius: 10,
		zIndex: -10,
	},
};
