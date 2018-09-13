import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './list.scss';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

class List extends PureComponent {
	render() {
		const {items, maxWidth, onDelete, onChangeCheckbox} = this.props;
		
		return (
			<ListGroup style={ { maxWidth: `${ maxWidth }%`, margin: '0 auto' } }>
				{
					items.map( ac => {
						const listData = cn({
							todoComplete: ac.isCompleted,
						});
						const listItemClasses = cn({
							listItems: true,
							completedItem: ac.isCompleted
						}); 
						return (
							<ListGroupItem className={listItemClasses} key={ ac.id }>
								<input
									type="checkbox"
									className="checkbox-input"
									name={ac.name}
									id={ac.id}
									checked={ac.isCompleted}
									onChange={e => onChangeCheckbox(e)}
								/>
								<div className={listData} >{ac.name}</div>
								<FontAwesomeIcon className="delete-icon" onClick={()  => onDelete(ac)} icon="times"/>
							</ListGroupItem>
						);
					})
				}
			</ListGroup>
		);
 	}
};

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	maxWidth: PropTypes.number.isRequired,
	onDelete: PropTypes.func.isRequired,
	onChangeCheckbox: PropTypes.func.isRequired,
};

export default List;