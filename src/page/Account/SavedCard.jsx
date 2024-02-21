import React from 'react';
import Image from '../../components/Image';
import { Col } from 'react-bootstrap';

const SavedCard = () => {
	return (
		<>
			<Col>
				<div className="d-flex justify-content-center">
					<div className="text-center  my-5 py-5">
						<Image name="credit-card.svg" style={{ width: '100px' }} />
						<h5 style={{ fontWeight: 'bold' }} className="my-3">
							SAVE YOUR CREDIT/DEBIT CARDS DURING PAYMENT
						</h5>
						<h6
							style={{
								width: '300px',
								color: 'grey',
								margin: '0px auto',
							}}
						>
							It's convenient to pay with saved cards. Your card
							information will be secure, we use 128-bit encryption
						</h6>
					</div>
				</div>
				<div className="d-flex align-items-center justify-content-center mt-5">
					<div
						style={{
							width: '200px',
							height: '1px',
							backgroundColor: 'grey',
						}}
					></div>
					<p style={{ color: 'grey' }}>MYNTRA SECURED</p>
					<div
						style={{
							width: '200px',
							height: '1px',
							backgroundColor: 'grey',
						}}
					></div>
				</div>

				<div className="d-flex justify-content-center mb-5">
					<Image name="pci-dss.png" style={{ height: '30px' }} />
					<Image
						name="master-card.png"
						style={{ height: '30px' }}
						className="mx-4"
					/>
					<Image name="visa.png" style={{ height: '30px' }} />
				</div>
			</Col>
		</>
	);
};

export default SavedCard;
