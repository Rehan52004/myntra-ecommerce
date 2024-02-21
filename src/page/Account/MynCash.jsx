import React from 'react';
import { Accordion, Col } from 'react-bootstrap';

const MynCash = () => {
	return (
		<>
			<Col>
				<div
					style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.25)' }}
					className="text-center py-3 mt-3 ms-1"
				>
					<p style={{ color: '#14cda8', fontWeight: 'bold' }}>
						TOTAL AVAILABLE MYNCASH
					</p>
					<h3>0</h3>
					<div>
						<small style={{ fontWeight: 'bold' }}>
							Your total MynCash is worth0.00
						</small>
					</div>
					<div style={{ width: '300px', margin: '0px auto' }}>
						<small>
							You can pay upto 10% (may vary during the sale & promotion
							events) of your order value through MynCash. Use them on
							the Payments page during checkout
						</small>
					</div>
					<div>
						<small style={{ fontWeight: 'bold' }}>
							You have 0 referral MynCash pending
						</small>
					</div>
				</div>
				<div
					style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.25)' }}
					className="ms-1 mt-2"
				>
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0" style={{ borderRadius: '0px' }}>
							<Accordion.Header>
								<p
									style={{ fontWeight: 'bold' }}
									className="mb-0 py-2 ps-4"
								>
									ELIGIBILITY, MEMBERSHIP, ACCRUAL
								</p>
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu
								fugiat nulla pariatur. Excepteur sint occaecat cupidatat
								non proident, sunt in culpa qui officia deserunt mollit
								anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
				<div
					style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.25)' }}
					className="ms-1"
				>
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0" style={{ borderRadius: '0px' }}>
							<Accordion.Header>
								<p
									style={{ fontWeight: 'bold' }}
									className="mb-0 py-2 ps-4"
								>
									ELIGIBILITY, MEMBERSHIP, ACCRUAL
								</p>
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu
								fugiat nulla pariatur. Excepteur sint occaecat cupidatat
								non proident, sunt in culpa qui officia deserunt mollit
								anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</Col>
		</>
	);
};

export default MynCash;
