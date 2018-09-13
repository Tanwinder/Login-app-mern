import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './filters.scss';

const Filters = (props) => (
	<div className="filters">
		<div>Filters: </div>
		<ButtonGroup className="filters-button">
			<Button outline color="primary" size="sm" type="button">All</Button>
			<Button outline color="success" size="sm" type="button">Completed</Button>
			<Button outline color="danger" size="sm" type="button">Pending</Button>
		</ButtonGroup>
	</div>
);

export default Filters;