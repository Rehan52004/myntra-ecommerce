import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Index = () => {
	return (
		<>
			<div className="profile-view" style={{ height: '90vh' }}>
				<Container className="px-2 py-5">
					<Row
						style={{ width: '85%', borderBottom: '1px solid #e4e4e4' }}
						className="mx-auto pt-4"
					>
						<h5 className="mb-0" style={{ fontWeight: 'bold' }}>
							Account
						</h5>
						<p>user name</p>
					</Row>
					<Row style={{ width: '85%' }} className="mx-auto">
						<Col
							md={2}
							style={{
								borderRight: '1px solid #e4e4e4',
								padding: '0px',
							}}
							className="side-menu"
						>
							<div className="">
								<div className="d-flex flex-md-column">
									<NavLink
										to="overview"
										className="nav-link py-2 px-xs-2 px-0 mt-4"
									>
										<h6>Overview</h6>
									</NavLink>
									<hr className="me-4" />
									<p>Order</p>
									<NavLink
										to="order"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6>Order & Returns</h6>
									</NavLink>
									<hr className="me-4" />
									<p>Credits</p>
									<NavLink
										to="coupens"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6 className="mb-0">Coupens</h6>
									</NavLink>
									<NavLink
										to="myntracredits"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6 className="mb-0">Myntra Credits</h6>
									</NavLink>
									<NavLink
										to="myncash"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6 className="mb-0">Myncash</h6>
									</NavLink>
									<hr className="me-4" />
									<p>Account</p>
									<NavLink
										to="profile"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6 className="mb-0">Profile</h6>
									</NavLink>
									<NavLink
										to="savedcard"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6 className="mb-0">Saved Cards</h6>
									</NavLink>
									<NavLink
										to="savedvpa"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6 className="mb-0">Saved VPA</h6>
									</NavLink>
									<NavLink
										to="address"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6 className="mb-0">Addresses</h6>
									</NavLink>
									<NavLink
										to="myntrainsider"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6 className="mb-0">Myntra Insider</h6>
									</NavLink>
									<hr className="me-4" />
									<p>Legal</p>
									<NavLink
										to="/termsofuse"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6 className="mb-0">Terms of Use</h6>
									</NavLink>
									<NavLink
										to="/privacypolicy"
										className="nav-link py-2 px-3 px-md-0"
									>
										<h6 className="mb-0">Privacy Policy</h6>
									</NavLink>
								</div>
							</div>
						</Col>
						<Outlet />
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Index;
