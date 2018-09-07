import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ADD_ITEM } from '../../../actions/types';

class ShoppingApp extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch({ type: ADD_ITEM });
	}

	render() {
		const { items } = this.props;
		return (
			<div>
				{
					!!items ? items.map( ac => (
						<li key={ ac.name }>{`Hello ${ ac.name }`}</li>
					))
						:
						<div>loading...</div>
				}
			</div>
		);
	}
}

ShoppingApp.propTypes = {

};
const mapStateToProps = state => {
	return {
		items: state.shopping.items
	};
};
export default connect(mapStateToProps)(ShoppingApp);