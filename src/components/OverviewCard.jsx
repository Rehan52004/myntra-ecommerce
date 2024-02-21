import React from 'react';
import { Col } from 'react-bootstrap';

const OverviewCard = (props) => {
	const { icon, heading, para } = props;
	return (
		<>
			<Col lg={4}>
				<div
					style={{ border: '1px solid rgb(201, 201, 201)' }}
					className="text-center p-5"
				>
					{icon}
					<h5>{heading}</h5>
					<small>{para}</small>
				</div>
			</Col>
		</>
	);
};

export default OverviewCard;
