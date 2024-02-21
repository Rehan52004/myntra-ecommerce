import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FullAddress = (props) => {
	const { name, mobile, pincode, state, address, town, district } = props;
	return (
		<>
			<div style={{ boxShadow: '0px 0px 3px rgb(201, 201, 201)' }}>
				<div className="mt-4 p-2 text-secondary d-flex flex-column">
					<h6 className="mb-2 text-dark">{name}</h6>
					<small className="mb-0">{address}</small>
					<small className="mb-0">{district}</small>
					<small className="mb-0">
						{town}-{pincode}
					</small>
					<small className="mb-2">{state}</small>
					<small className="mb-0">{`Mobile : ${mobile}`}</small>
				</div>
				<Container className="">
					<Row
						className="text-center"
						style={{ color: 'purple', fontWeight: 'bold' }}
					>
						<Col
							md={6}
							style={{ border: '1px solid rgb(201, 201, 201)' }}
							className="py-2"
						>
							<small>Edit</small>
						</Col>
						<Col
							md={6}
							style={{ border: '1px solid rgb(201, 201, 201)' }}
							className="py-2"
						>
							<small>Remove</small>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default FullAddress;
