import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ADD_ITEM } from '../../../actions/types';
import List from '../../common/list/list';

class TodoList extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch({ type: ADD_ITEM });
	}

	render() {
		const { items } = this.props;
		return (
			<ul>
				<List items={ items }/>
			</ul>
		);
	}
}

TodoList.propTypes = {

};
const mapStateToProps = state => {
	return {
		items: state.todolist.items
	};
};
export default connect(mapStateToProps)(TodoList);