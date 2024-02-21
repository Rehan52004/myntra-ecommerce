import React, { createContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { CgProfile } from 'react-icons/cg';

import { BsCart3 } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

import { Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Image from './Image';

const functions = createContext();

const Header = (props) => {
	const [cart, setCart] = useState([]);
	const [wishlist, setWishlist] = useState([]);
	//toast state
	const [show, setShow] = useState(false);
	console.log(cart);

	return (
		<functions.Provider
			value={{ cart, setCart, wishlist, setWishlist, show, setShow }}
		>
			<Navbar
				expand="lg"
				className="navbar fixed-top"
				bg="white"
				style={{ paddingBlock: '15px' }}
			>
				<Container
					className="align-items-center"
					fluid
					style={{ width: '95%', margin: '0 auto' }}
				>
					<Navbar.Brand>
						<NavLink to="/" className="mt-1">
							<Image
								name="/logos/myntra-logo-1.png"
								style={{ width: '60px' }}
							/>
						</NavLink>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="my-2 my-lg-0"
							style={{
								maxHeight: '100px',
								fontSize: '15px',
								fontWeight: 'bold',
								textTransform: 'uppercase',
								letterSpacing: '1px',
							}}
							navbarScroll
						>
							<NavLink to="/man" className="nav-link mx-1">
								Men
							</NavLink>
							<NavLink to="/women" className="nav-link mx-2">
								Women
							</NavLink>
							<NavLink to="/kids" className="nav-link mx-2">
								Kids
							</NavLink>
							<NavLink to="/home" className="nav-link mx-2">
								Home & Living
							</NavLink>
							<NavLink to="/beauty" className="nav-link mx-1">
								Beauty
							</NavLink>
							<NavLink to="/studio" className="nav-link mx-1">
								studio
							</NavLink>
						</Nav>
						<Nav
							className="my-2 my-lg-0 ms-auto me-4"
							style={{
								maxHeight: '100px',
								fontSize: '0.9rem',
							}}
							navbarScroll
						>
							<Form.Control
								type="search"
								placeholder="Search"
								aria-label="Search"
								className="pe-lg-5"
								style={{
									borderRadius: '5px',
									border: '0',
									backgroundColor: '#F5F5F6',
								}}
							/>
						</Nav>
						<div className="d-flex text-center">
							<NavDropdown
								title={
									<>
										<CgProfile
											size={25}
											style={{ marginTop: '7px' }}
										/>
										<p
											style={{
												marginBottom: '0',
												fontSize: '12px',
												fontWeight: 'bold',
											}}
										>
											Profile
										</p>
									</>
								}
								id="basic-nav-dropdown"
							>
								<Link
									to="my/profile"
									className="nav-link ms-3"
									style={{ fontSize: '0.9rem' }}
								>
									<p
										style={{
											fontWeight: 'bold',
											marginBottom: '0px',
										}}
									>
										Hello, user
									</p>
									<p>12456789</p>
								</Link>

								<div style={{ fontSize: '0.9rem' }}>
									<NavDropdown.Divider className="mx-3" />
									<NavDropdown.Item
										href="#action/3.2"
										className="my-1"
									>
										Order
									</NavDropdown.Item>
									<NavDropdown.Item
										href="#action/3.3"
										className="my-1"
									>
										Wishlist
									</NavDropdown.Item>
									<NavDropdown.Item
										href="#action/3.3"
										className="my-1"
									>
										Gift Card
									</NavDropdown.Item>
									<NavDropdown.Item
										href="#action/3.3"
										className="my-1"
									>
										Contact us
									</NavDropdown.Item>
									<NavDropdown.Item
										href="#action/3.3"
										className="my-1"
									>
										Myntra Insider
									</NavDropdown.Item>

									<NavDropdown.Divider className="mx-3" />

									<NavDropdown.Item
										href="#action/3.2"
										className="my-1"
									>
										Myntra Credit
									</NavDropdown.Item>
									<NavDropdown.Item
										href="#action/3.3"
										className="my-1"
									>
										Coupons
									</NavDropdown.Item>
									<NavDropdown.Item
										href="#action/3.3"
										className="my-1"
									>
										Saved Cards
									</NavDropdown.Item>
									<NavDropdown.Item
										href="#action/3.3"
										className="my-1"
									>
										Saved VPA
									</NavDropdown.Item>
									<NavDropdown.Item
										href="#action/3.3"
										className="my-1"
									>
										Saved Addresses
									</NavDropdown.Item>

									<NavDropdown.Divider className="mx-3" />
									<NavDropdown.Item
										href="#action/3.3"
										className="my-1"
									>
										Edit Profile
									</NavDropdown.Item>
									<NavDropdown.Item
										href="#action/3.3"
										className="my-1"
									>
										Log out
									</NavDropdown.Item>
								</div>
							</NavDropdown>
							<NavLink
								to="/wishlist"
								className="ms-4 text-dark position-relative text-lg-center"
								style={{
									fontSize: '1.3rem',
									textDecoration: 'none',
								}}
							>
								{wishlist.length ? (
									<span
										className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
										style={{ fontSize: '10px' }}
									>
										{wishlist.length}
									</span>
								) : (
									''
								)}
								<AiOutlineHeart size={25} />
								<p
									style={{
										marginBottom: '0',
										fontSize: '12px',
										fontWeight: 'bold',
									}}
								>
									Wishlist
								</p>
							</NavLink>
							<NavLink
								to="/cart"
								className="ms-4 text-dark position-relative text-lg-center"
								style={{
									fontSize: '1.3rem',
									textDecoration: 'none',
								}}
							>
								{cart.length ? (
									<span
										className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
										style={{ fontSize: '10px' }}
									>
										{cart.length}
									</span>
								) : (
									''
								)}
								<BsCart3 size={25} />
								<p
									style={{
										marginBottom: '0',
										fontSize: '12px',
										fontWeight: 'bold',
									}}
								>
									Cart
								</p>
							</NavLink>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div>{props.children}</div>
		</functions.Provider>
	);
};

export default Header;

export { functions };
