import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import { Box, Button, Chip } from '@mui/material';
import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import CoinRangeChart from './CoinRangeChart';
import MyChip from './MyChip';
import styles from './Hero.module.scss';
import Image from 'next/image';
import styled from '@emotion/styled';

const TradeCard = () => {
	const [chartShowing, setChartShowing] = useState(false);
	return (
		<CoinCard className={[styles.trade, styles.carousel].join(' ')}>
			{/* <Tilt
				tiltEnable={false}
				glareEnable={true}
				glareMaxOpacity={0.1}
				glareColor="whitesmoke"
				glarePosition="bottom"
				perspective={40000}
				style={{ width: '800px', height: '270px', margin: '3rem auto' }}
			> */}
			<Box
				display="grid"
				gridTemplateColumns="repeat(6, 1fr)"
				gridTemplateRows="repeat(4,1fr)"
				height={'270px'}
				width={'100%'}
				style={{ padding: '1rem' }}
				gap={'5px'}
			>
				<Box
					gridColumn="1"
					gridRow="1"
					className={(styles.flex, styles.col, styles.nobg)}
				>
					<Image
						src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
						alt="icon"
						height={50}
						width={50}
					/>
				</Box>
				<Box gridColumn="1" gridRow="2">
					<MyChip label={'BTC'} value={'bitcoin'} />
				</Box>

				<Box
					gridColumn="2"
					gridRow="1"
					className={[styles.flex, styles.darkbg, styles.nobg].join(' ')}
				>
					<Chip
						label="sell"
						color="warning"
						icon={<ArrowCircleDown />}
						size="small"
					/>
				</Box>

				<Box
					gridColumn="2"
					gridRow="2"
					className={[styles.flex, styles.darkbg, styles.nobg].join(' ')}
				>
					<Chip
						label={'Closed with prof'}
						color="primary"
						icon={<ArrowCircleUp />}
						size="small"
					/>
				</Box>

				<Box gridColumn="3/6" gridRow="1/4" className={styles.flex}>
					{chartShowing ? (
						<CoinRangeChart />
					) : (
						<Button
							onClick={(e) => {
								e.stopPropagation();
								setChartShowing(true);
							}}
						>
							view chart snapshot
						</Button>
					)}
				</Box>

				<Box
					gridColumn="6"
					gridRow="1"
					className={[styles.flex, styles.darkbg, styles.col].join(' ')}
				>
					<span
						style={{
							fontSize: 12,
							textTransform: 'uppercase',
							color: 'darkgrey',
						}}
					>
						PnL
					</span>

					<span
						className={styles.green}
						style={{
							fontSize: 12,
						}}
					>
						+11,415,426.00 USD
					</span>
				</Box>
				<Box
					gridColumn="6"
					gridRow="2"
					className={[styles.flex, styles.darkbg, styles.col].join(' ')}
				>
					<span
						style={{
							fontSize: 12,
							textTransform: 'uppercase',
							color: 'darkgrey',
						}}
					>
						PnL(%)
					</span>

					<span className={styles.green} style={{ fontSize: 18 }}>
						+6.42%
					</span>
				</Box>

				<Box gridColumn="6" gridRow="3">
					<MyChip label={'Investment'} value={'177,931,380.00'} />
				</Box>
				<Box gridColumn="6" gridRow="4">
					<MyChip label={'Closed Value'} value={'189,346,806.00'} />
				</Box>

				<Box gridColumn={'2'} gridRow="3">
					<MyChip label={'Closed'} value={'2022-06-03'} />
				</Box>
				<Box gridColumn={'2'} gridRow="4">
					<MyChip label={'Duration'} value={'53:25:03'} />
				</Box>

				<Box gridColumn={'1'} gridRow="3">
					<MyChip label={'Opened'} value={'2022-06-01'} />
				</Box>
				<Box gridColumn={'1'} gridRow="4">
					<MyChip label={'Closed: '} value={'7 hours ago'} />
				</Box>
				<Box gridColumn="4" gridRow="4">
					<MyChip label={'Entry'} value={'31,470.00 USD'} />
				</Box>
				<Box gridColumn="3" gridRow="4">
					<MyChip label={'Quantity'} value={'5654'} />
				</Box>
				<Box gridColumn="5" gridRow="4">
					<MyChip label={'Exit Price'} value={'29,451.00 USD'} />
				</Box>
			</Box>
			{/* </Tilt> */}
		</CoinCard>
	);
};

export default TradeCard;

export const CoinCard = styled(Box)`
	background: #101724;
	border-radius: 0.5rem;
	padding: 0;
	border: 1px solid #1c2a3d;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	max-width: none !important;
	margin: 0;
	width: 100%;
	height: 100%;
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
		rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
