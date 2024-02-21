import React from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Image from './Image';

const ProductCard = (props) => {
	const { name, price, image, to } = props;
	return (
		<>
			<Card style={{ width: '16rem', height: '25rem' }} className="mycard">
				<Link to={to} style={{ textDecoration: 'none', color: 'black' }}>
					<div
						style={{
							borderBottom: '1px solid #e4e4e4',
						}}
					>
						<Image
							name={image}
							style={{
								height: '20rem',
								width: '16rem',
								objectFit: 'cover',
							}}
						/>
					</div>
					<Card.Body>
						<p className="mb-0">{name}</p>
						<p className="mb-0">{`₹${price}`}</p>
					</Card.Body>
				</Link>
			</Card>
		</>
	);
};

export default ProductCard;
