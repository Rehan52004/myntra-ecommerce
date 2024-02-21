import React from 'react';
import Image from '../../components/Image';
import { Col, Container, Row } from 'react-bootstrap';

const MyntraCredits = () => {
	return (
		<>
			<Col md={9}>
				<div
					style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.25)' }}
					className="mt-3 ms-1"
				>
					<div
						className="d-flex align-items-center justify-content-center pt-5 pb-4"
						style={{ borderBottom: '0.5px solid #eaeaec' }}
					>
						<div>
							<div className="d-flex justify-content-center">
								<Image
									name="myntra-credit-logo.svg"
									style={{ width: '150px' }}
								/>
							</div>
							<div>
								<small>
									A QUICK AND CONVENIENT WAY TO PAY AND REFUND
								</small>
							</div>
						</div>
					</div>
					<Container className="p-4">
						<Row className="g-4">
							<Col md={6} className="text-center">
								<Image
									name="instant-cashback.svg"
									style={{ height: '50px' }}
								/>
								<div>
									<small style={{ fontWeight: 'bold', color: 'grey' }}>
										INSTANT CHECKOUT
									</small>
								</div>
								<div>
									<small>One-click, easy and fast checkout</small>
								</div>
							</Col>
							<Col md={6} className="text-center">
								<Image
									name="faster-refunds.svg"
									style={{ height: '50px' }}
								/>
								<div>
									<small style={{ fontWeight: 'bold', color: 'grey' }}>
										FASTER REFUNDS
									</small>
								</div>
								<div>
									<small> Get instant refunds as Myntra Credit</small>
								</div>
							</Col>
							<Col md={6} className="text-center">
								<Image
									name="consolidated-money.svg"
									style={{ height: '50px' }}
								/>
								<div>
									<small style={{ fontWeight: 'bold', color: 'grey' }}>
										CONSOLIDATED MONEY
									</small>
								</div>
								<div>
									<small>
										Gift cards, refunds and cashbacks in one place
									</small>
								</div>
							</Col>
							<Col md={6} className="text-center">
								<Image
									name="mode-benifits.svg"
									style={{ height: '50px' }}
								/>
								<div>
									<small style={{ fontWeight: 'bold', color: 'grey' }}>
										MANY MORE BENEFITS
									</small>
								</div>
								<div>
									<small>
										Benefits and offers on using Myntra Credit
									</small>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<div
					style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.25)' }}
					className="mt-3 ms-1 pt-3"
				>
					<Container className="text-center">
						<p style={{ fontWeight: 'bold' }}>
							TOP-UP YOUR MYNTRA CREDIT NOW!
						</p>
						<h3 style={{ fontWeight: 'bold' }}>Rs 0.00</h3>
						<hr className="px-3" />
						<Row>
							<Col className="text-center">
								<small>For a quick checkout</small>
								<p style={{ fontWeight: 'bold', color: '#526cd0' }}>
									TOP
								</p>
							</Col>
							<Col className="text-center">
								<small>Have a gift card</small>
								<p style={{ fontWeight: 'bold', color: '#526cd0' }}>
									ADD GIFT CARD
								</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div
					style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.25)' }}
					className="py-3 ps-4 mt-3 ms-1"
				>
					<p style={{ fontWeight: 'bold' }} className="mb-0">
						TRANSACTION LOG
					</p>
				</div>
				<div
					style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.25)' }}
					className="py-3 ps-4 mt-3 ms-1"
				>
					<p style={{ fontWeight: 'bold' }} className="mb-0">
						CREDIT DETAILS
					</p>
				</div>
				<div
					style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.25)' }}
					className="py-2 px-4 mt-3 ms-1"
				>
					<p style={{ fontWeight: 'bold' }} className="mb-2">
						CREDIT DETAILS
					</p>
					<ul>
						<li>
							Myntra Credit can't be cancelled or transferred to another
							account.
						</li>
						<li>
							It can't be withdrawn in the form of cash or transferred to
							any bank account.
						</li>
						<li>It can't be used to purchase Gift Cards.</li>
						<li>
							Net-banking and credit/debit cards issued in India can be
							used for Myntra Credit top up.
						</li>
						<li>Credits have an expiry. Check FAQs for more details.</li>
					</ul>
					<div className="d-flex justify-content-between">
						<p style={{ fontWeight: 'bold', color: '#526cd0' }}>
							MYNTRA CREDIT T&C {'>'}
						</p>
						<p style={{ fontWeight: 'bold', color: '#526cd0' }}>
							GIFT CARD T&C {'>'}
						</p>
						<p style={{ fontWeight: 'bold', color: '#526cd0' }}>
							FAQS {'>'}
						</p>
					</div>
				</div>
			</Col>
		</>
	);
};

export default MyntraCredits;
