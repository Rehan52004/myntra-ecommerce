import React from 'react';
import Image from '../../components/Image';
import { Col } from 'react-bootstrap';

const SavedVpa = () => {
	return (
		<>
			<Col>
				<div className="text-center mt-5 pt-5">
					<Image name="nosavedvpa.png" />
					<h6 style={{ fontWeight: 'bold' }}>
						SAVE YOUR VPA WHILE DOING A PAYMENT
					</h6>
					<h6 style={{ color: 'grey' }}>
						It's convenient to pay with saved VPAs.
					</h6>
				</div>
			</Col>
		</>
	);
};

export default SavedVpa;
