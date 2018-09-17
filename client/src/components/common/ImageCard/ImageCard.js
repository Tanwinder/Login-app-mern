import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button } from 'reactstrap';
  
  

class ImageCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { width, key, imageSrc } = this.props;
		return (
			<div key={key} style={{flexBasis: `${ width }%`, margin: '.8rem 0'}}>
				<Card>
					<CardImg top width="100%" src={imageSrc} alt="Card image cap" />
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardText>Some quick example.</CardText>
						<Button color="info" size="sm">Add to cart</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}

ImageCard.propTypes = {

};

export default ImageCard;