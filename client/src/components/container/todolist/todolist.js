import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { 
	addTodoItem, 
	getTodoItems,
	onDeleteItem,
	onChangeCheckbox,
	todoFilterSelected } from '../../../actions/todolist-actions';
import List from '../../common/list/list';
import './todolist.scss';
import * as selector from '../../../selectors/todolist-selector';
import Filters from '../../common/filters/filters';

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
	onFilterClick = (e) => {
		this.props.dispatch(todoFilterSelected(e.target.value));
	}
	onSubmit = (event) => {
		event.preventDefault();
		if(!!this.state.value) {
			const newItem = {
				'name': ` ${ this.state.value }`,
				'isCompleted': false
			};
			this.props.dispatch(addTodoItem(newItem));
		} else {
			// this.props.dispatch(itemIsEmpty());
		}
	}
	onDelete = (item) => {
		this.props.dispatch(onDeleteItem(item._id));
	}
	onChangeCheckbox = (e) => {
		const { checked, id } = e.target;
		const items = this.props.items.map( ac => {
			if( ac._id == id) {
				ac.isCompleted = checked;
			}
			return ac;
		});
		this.props.dispatch(onChangeCheckbox(items));
	}

	render() {
		const { items, filter, duplicate } = this.props;
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
				{ duplicate ? <div style={{background: 'red', color: 'white', padding: '5px', width: '100%'}}>Duplicate exist</div> : ''}
				<List 
					items={items} 
					maxWidth={100} 
					onDelete={this.onDelete}
					onChangeCheckbox={ this.onChangeCheckbox }
				/>
				<Filters onFilterClick={this.onFilterClick} activeFilter={filter}/>
			</div>
		);
	}
}

TodoList.propTypes = {

};
const mapStateToProps = state => {
	return {
		items: selector.getFilteredTodoItems(state),
		filter: selector.getTodoFilter(state),
		duplicate: state.todolist.duplicate
	};
};
export default connect(mapStateToProps)(TodoList);