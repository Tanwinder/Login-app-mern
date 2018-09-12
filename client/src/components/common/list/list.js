import React from 'react';
import PropTypes from 'prop-types';
import './list.scss';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const List = ({items, maxWidth, onDelete}) => (
	<ListGroup style={ { maxWidth: `${ maxWidth }%`, margin: '0 auto' } }>
		{
			items.map( ac => (
				<ListGroupItem className="list-items" key={ ac.id }>
					<span>{ac.name}</span>
					<FontAwesomeIcon style={{ color: 'red'}} onClick={()  => onDelete(ac)} icon="times"/>
				</ListGroupItem>
			))
		}
	</ListGroup>
);

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
	maxWidth: PropTypes.number.isRequired,
	onDelete: PropTypes.func,
};

export default List;