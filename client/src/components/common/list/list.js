import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';

const List = ({items, maxWidth, onDelete, onChangeCheckbox}) => {
	return (
		<ListGroup style={ { maxWidth: `${ maxWidth }%`, margin: '0 auto' } }>
			{
				items.map( ac => {
					const listData = cn({
						todoComplete: ac.isChecked 
					});
					return (
						<ListGroupItem className="list-items" key={ ac.id }>
							<Input
								type="checkbox"
								className="checkbox-input"
								name={ac.name}
								id={ac.id}
								onChange={e => onChangeCheckbox(e)}
							/>
							<span className={listData} >{ac.name}</span>
							<FontAwesomeIcon style={{ color: 'red'}} onClick={()  => onDelete(ac)} icon="times"/>
						</ListGroupItem>
					);
				})
			}
		</ListGroup>
	);
};

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	maxWidth: PropTypes.number.isRequired,
	onDelete: PropTypes.func.isRequired,
	onChangeCheckbox: PropTypes.func.isRequired,
};

export default List;