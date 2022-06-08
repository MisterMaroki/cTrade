/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Hero.module.scss';
const MyChip = ({ label, value }) => {
	return (
		<div className={[styles.flex, styles.darkbg, styles.col].join(' ')}>
			<span
				style={{
					fontSize: 12,
					textTransform: 'uppercase',
					color: 'darkgrey',
				}}
			>
				{label}
			</span>
			<span
				style={{
					color: 'whitesmoke',
					fontSize:
						value?.toString()?.length > 10
							? value?.toString()?.length > 13
								? 12
								: 14
							: 16,
				}}
			>
				{value}
			</span>
		</div>
	);
};

export default MyChip;
