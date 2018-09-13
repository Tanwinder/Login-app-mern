import React, { PureComponent } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './filters.scss';

class Filters extends PureComponent {
	render() {
		const { onFilterClick } = this.props;
		return (
			<div className="filters">
				<div>Filters: </div>
				<ButtonGroup className="filters-button">
					<Button onClick={onFilterClick} outline color="primary" size="sm" value="all" type="button">All</Button>
					<Button onClick={onFilterClick} outline color="success" size="sm" value="completed" type="button">Completed</Button>
					<Button onClick={onFilterClick} outline color="danger" size="sm" value="pending" type="button">Pending</Button>
				</ButtonGroup>
			</div>
		);
	}
}

export default Filters;