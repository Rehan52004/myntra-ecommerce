import React from 'react';
import Image from '../../components/Image';
import { Col } from 'react-bootstrap';

const Order = () => {
	return (
		<>
			<Col md={9} className="d-flex flex-column align-items-center mt-5 ">
				<Image name="order.png" style={{ width: '40%' }} />
				<h5 className="my-3">You haven't placed any order yet!</h5>
				<p className="mb-3">
					Order section is empty. After placing order, You can track them
					from here!
				</p>
			</Col>
		</>
	);
};

export default Order;
