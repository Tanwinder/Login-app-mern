import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
	return (
		<div className="footer">
			<div>
				<span>Copyright </span>
				<FontAwesomeIcon icon="copyright" />
				<span> 2018 MERNNODEAPP Inc. </span>
			</div>
			<div>Powered By Tanwinder</div>
		</div>
	);
};

export default Footer;