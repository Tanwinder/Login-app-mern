import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const List = ({items}) => (
	<ListGroup>
		{
			items.map( ac => (
				<ListGroupItem key={ ac.id }>{ac.name}</ListGroupItem>
			))
		}
	</ListGroup>
);

export default List;