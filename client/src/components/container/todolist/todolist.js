import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { 
	addTodoItem, 
	getTodoItems,
	onDeleteItem } from '../../../actions/todolist-actions';
import List from '../../common/list/list';
import './todolist.scss';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}
	componentDidMount() {
		this.props.dispatch(getTodoItems());
	}

	onChangeInput = (e) => {
		this.setState({
			value: e.target.value
		});
	}
	onSubmit = (event) => {
		event.preventDefault();
		const newItem = {
			name: this.state.value,
			id: this.props.items.length + 1
		};
		this.props.dispatch(addTodoItem(newItem));
	}
	onDelete = (item) => {
		this.props.dispatch(onDeleteItem(item.id));
	}

	render() {
		const { items } = this.props;
		return (
			<div className="todolist">
				<Form className="todolist__add-items" onSubmit={this.onSubmit} >
					<Input 
						onChange={this.onChangeInput} 
						type="text" 
						placeholder="Add a item" 
						value={this.state.value} 
					/>
					<Button color="success" type="submit" >Add</Button>
				</Form>
				<List items={ items } maxWidth={ 100 } onDelete={this.onDelete}/>
			</div>
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