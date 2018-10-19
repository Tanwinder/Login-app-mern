import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	Card,
	CardHeader,
	CardBody,
	CardText,
	Button,
	CardTitle
} from 'reactstrap';
import * as selector from '../../../selectors/product-selector';
import ImageCard from '../../common/ImageCard/ImageCard';
import './products.scss';

class Products extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const arr = [ 1,2,3,4,5,6,7,8,9,10 ];
		return (
			<div className="products">
				<Card>
					<CardHeader>Products</CardHeader>
					<CardBody className="outer-card-body">
						{ arr.map( (ac,i) => <ImageCard 
							key={ac} 
							width={17}
							imageSrc={'../../../../public/images/product1.jpg'} />)}
					</CardBody>
				</Card>
			</div>
		);
	}
}

Products.propTypes = {

};

const mapStateToProps = state => ({
	products: selector.getFilteredProducts(state)
});

export default connect(mapStateToProps)(Products);
