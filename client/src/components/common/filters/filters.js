import React, { PureComponent } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './filters.scss';

class Filters extends PureComponent {
	render() {
		const { onFilterClick, activeFilter } = this.props;
		return (
			<div className="filters">
				<div>Filters: </div>
				<ButtonGroup className="filters-button">
					<Button onClick={onFilterClick} outline color="primary" size="sm" value="all" type="button" active={ 'all' == activeFilter }>All</Button>
					<Button onClick={onFilterClick} outline color="success" size="sm" value="completed" type="button" active={ 'completed' == activeFilter }>Completed</Button>
					<Button onClick={onFilterClick} outline color="danger" size="sm" value="pending" type="button" active={ 'pending' == activeFilter }>Pending</Button>
				</ButtonGroup>
			</div>
		);
	}
}

export default Filters;