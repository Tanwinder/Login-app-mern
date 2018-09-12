import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
	return (
		<div className="footer">
			<div>
				<span>Copyright </span>
				<FontAwesomeIcon icon="copyright" />
				<span> 2018 APP Inc. </span>
			</div>
			<div>
				<span>Powered By</span>
				<Link to="/about"> Tanwinder</Link>
			</div>
		</div>
	);
};

export default Footer;