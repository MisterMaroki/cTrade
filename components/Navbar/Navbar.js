import React from 'react';
import styles from './Navbar.module.scss';
const Navbar = () => {
	return (
		<div className={styles.navbar_container}>
			<h2>cTrade</h2>
			<ul>
				<li>
					<a href="#">Features</a>
				</li>
				<li>
					<a href="#">Pricing</a>
				</li>
				<li>
					<a href="#">Community</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
