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
// import * as selector from '../../../selectors/product-selector';

class Products extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Card>
					<CardHeader>Orders</CardHeader>
					<CardBody>
						<CardTitle>Special Title Treatment</CardTitle>
						<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
						<Button>Go somewhere</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}

Products.propTypes = {

};

const mapStateToProps = state => ({
	// products: selector.getOrders(state)
});

export default connect(mapStateToProps)(Products);