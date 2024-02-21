import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsArrowLeft, BsFillHeartFill, BsTag } from 'react-icons/bs';
import { CiDiscount1 } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';

import Image from '../components/Image';
import { functions } from '../components/Header';

import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import products from '../services/products';

const Cart = () => {
	const { cart, setCart, wishlist, setWishlist, show, setShow } =
		useContext(functions);

	//modal
	const [modal, setModal] = useState(null);

	const [delivery, setDelivery] = useState(0);

	const deliveryChange = (e) => {
		const { value } = e.target;
		setDelivery(value);
	};

	const remove = (id) => {
		const updatedCart = cart.filter((product) => product.id !== id);
		setCart(updatedCart);
		setModal(null);
	};

	const inc = (id) => {
		const updatedCart = cart.map((product) => {
			if (product.id === id) product.qty += 1;
			return product;
		});
		setCart(updatedCart);
	};

	const dec = (id) => {
		const updatedCart = cart.map((product) => {
			if (product.qty > 1 && product.id === id) product.qty -= 1;
			return product;
		});
		setCart(updatedCart);
	};

	function moveToWishlist(id) {
		const isExist = wishlist.find((wish) => wish.id === id);

		if (!isExist) {
			const response = products.find((product) => product.id === id);
			setWishlist((prev) => [...prev, response]);
		}
		remove(id);
		setShow(true);
	}
	let totalPrice = 0;
	cart.forEach((product) => (totalPrice += product.price));
	return (
		<>
			{!cart.length ? (
				<div
					className="d-flex align-items-center justify-content-center"
					style={{ minHeight: '100vh' }}
				>
					<div className="text-center">
						<Image name="logos/empty-bag.webp" width="200px" />
						<h5>Hey, it feel so light</h5>
						<p>there is nothing in your bag. lets some add item</p>
						<Link to="/wishlist" className="pink-btn">
							<h5 style={{ fontWeight: 'bold' }}>
								Add item from wishlist
							</h5>
						</Link>
					</div>
				</div>
			) : (
				<div
					className="wrapper py-0 py-sm-5"
					style={{ backgroundColor: 'white' }}
				>
					<Modal
						show={modal}
						onHide={() => setModal(false)}
						size="md"
						aria-labelledby="contained-modal-title-vcenter"
						centered
					>
						<Modal.Header closeButton>
							<Modal.Title id="contained-modal-title-vcenter">
								What do you want to do ?
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Button
								style={{ width: '49%' }}
								className="my-2 blue-btn me-1"
								onClick={() => moveToWishlist(modal)}
							>
								Move to wishlist
							</Button>
							<Button
								style={{ width: '49%' }}
								className="my-2 blue-btn ms-1"
								onClick={() => remove(modal)}
							>
								Remove
							</Button>
						</Modal.Body>
					</Modal>
					<Container
						style={{
							width: '80%',
							margin: '0 auto',
						}}
					>
						<Row>
							<Col
								md={7}
								style={{ borderRight: '1px solid #eaeaec' }}
								className="px-4"
							>
								<div
									className="d-flex justify-content-between align-items-center p-3"
									style={{
										border: '1px solid #eaeaec',
										borderRadius: '4px',
									}}
								>
									<p style={{ fontWeight: 'bold' }}>
										Check Delivery time and service
									</p>
									<Button
										variant="outline-primary"
										className="pink-btn"
									>
										Enter pin code
									</Button>
								</div>
								<div
									style={{
										border: '1px solid #eaeaec',
										borderRadius: '4px',
									}}
									className="p-3 mt-2"
								>
									<h6 style={{ fontWeight: 'bold' }}>
										<CiDiscount1 size={20} className="me-2" /> Avail
										Offers
									</h6>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing
										elit. Voluptates, vitae.
									</p>
									<h6 style={{ color: '#E93D67', fontWeight: 'bold' }}>
										Show More
									</h6>
								</div>
								<div className="d-flex justify-content-between my-4 px-4">
									<h6 style={{ fontWeight: 'bold' }}>
										{cart.length} Item
									</h6>
									<div className="d-flex">
										<h6
											className="mx-4"
											style={{ fontWeight: '600' }}
										>
											Remove
										</h6>
										<h6>|</h6>
										<h6
											className="mx-4"
											style={{ fontWeight: '600' }}
										>
											Wishlist
										</h6>
									</div>
								</div>
								{cart.map((product) => (
									<div
										className="d-flex mt-2 p-3"
										style={{
											border: '1px solid #eaeaec',
											borderRadius: '4px',
										}}
									>
										<div
											style={{
												height: '9rem',
												width: '7rem',
												objectFit: 'cover',
											}}
										>
											<Image name={product.image} />
										</div>
										<div
											style={{ width: '100%', marginLeft: '20px' }}
										>
											<div className="d-flex justify-content-between align-items-center">
												<h6 style={{ fontWeight: '600' }}>
													{product.name}
												</h6>
												<div>
													<RxCross2
														className="me-2"
														style={{ cursor: 'pointer' }}
														size={25}
														onClick={() => setModal(product.id)}
													/>
												</div>
											</div>
											<p className="mb-0">{product.description}</p>
											<small className="mb-0">{product.brand}</small>

											<div className="d-flex align-items-center my-2">
												<p
													style={{
														cursor: 'pointer',
														margin: '0',
													}}
													onClick={() => dec(product.id)}
												>
													-
												</p>
												<p
													className="mx-1"
													style={{
														border: '1px solid grey',
														padding: '0px 10px',
														margin: '0px 5px',
													}}
												>
													{product.qty}
												</p>
												<p
													style={{
														cursor: 'pointer',
														margin: '0',
													}}
													onClick={() => inc(product.id)}
												>
													+
												</p>
											</div>
											<h6 style={{ fontWeight: '600' }}>
												{`₹ ${product.price}`}
											</h6>
										</div>
									</div>
								))}
							</Col>
							<Col md={4}>
								<div className="px-2">
									<p style={{ fontWeight: '600' }}>Coupen</p>
									<div
										className="d-flex justify-content-between align-items-center pb-3"
										style={{ borderBottom: '1px solid #eaeaec' }}
									>
										<p style={{ fontWeight: 'bold' }}>
											<BsTag size={20} /> Apply coupons
										</p>
										<Button
											variant="outline-primary"
											className="pink-btn"
										>
											Apply
										</Button>
									</div>
									<p className="mt-4" style={{ fontWeight: '600' }}>
										{`Price Detail (${cart.length}Item)`}
									</p>
									<div
										className="d-flex justify-content-between"
										style={{ borderBottom: '1px solid #eaeaec' }}
									>
										<div className="set-margin">
											<p>Total MRP</p>
											<p>Coupen Discount</p>
											<p>Convenience Fee</p>
										</div>
										<div className="text-end set-margin">
											<p>{`₹${totalPrice}`}</p>
											<p>Apply Coupen</p>
											<p>99</p>
										</div>
									</div>
									<div className="d-flex justify-content-between mt-4">
										<h6 style={{ fontWeight: 'bold' }}>
											Total Amount
										</h6>
										<p>{`₹${totalPrice + 99}`}</p>
									</div>
									<Button
										variant="primary"
										style={{
											letterSpacing: '2px',
											width: '100%',
											backgroundColor: '#E93D67',
											borderRadius: '0px',
											border: 'none',
											color: 'white',
											fontWeight: 'bold',
										}}
										className="py-2"
									>
										PLACE ORDER
									</Button>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			)}
		</>
	);
};

export default Cart;

/* <Container style={{ boxShadow: '0px 0px 10px grey' }}>
	<Row>
		<Col className="p-3 p-sm-5" md={8} style={{ backgroundColor: 'white' }}>
			{cart.length ? (
				<>
					<div className="d-flex justify-content-between">
						<h5>Shopping Cart</h5>
						<h5>{cart.length} items</h5>
					</div>
					<hr />

					<Row className="justify-content-between">
						<Col xs={4}>Product Details</Col>

						<Col xs={2}>Quantity</Col>

						<Col xs={2}>Price</Col>

						<Col xs={2}>Total</Col>
					</Row>
				</>
			) : (
				<div className="d-flex justify-content-center align-items-center">
					<Image name="shopping-cart.svg" style={{ maxHeight: '20rem' }} />
				</div>
			)}

			{cart.map((product, i) => (
				<Row
					className="py-4 align-items-center justify-content-between"
					key={i}
				>
					<Col xs={4} className="d-flex align-items-center">
						<div
							style={{
								height: '80px',
								width: '80px',
								objectFit: 'cover',
							}}
						>
							<Image name={product.image} />
						</div>
						<div className="d-flex flex-column ms-1">
							<div>
								<Link
									to={`/view/${product.id}`}
									style={{
										cursor: 'pointer',
										textDecoration: 'none',
										color: 'black',
										fontWeight: 'bold',
										margin: '5px 0px',
									}}
								>
									{product.name}
								</Link>
							</div>
							<p
								onClick={() => setModal(product.id)}
								style={{
									cursor: 'pointer',
									fontSize: '0.8rem',
									color: 'red',
								}}
							>
								remove
							</p>
						</div>
					</Col>

					<Col xs={2}>
						<div className="d-flex align-items-center">
							<p
								style={{ cursor: 'pointer', margin: '0' }}
								onClick={() => dec(product.id)}
							>
								-
							</p>
							<p
								className="mx-1"
								style={{
									border: '1px solid grey',
									padding: '1px 10px',
									margin: '0',
								}}
							>
								{product.qty}
							</p>
							<p
								style={{ cursor: 'pointer', margin: '0' }}
								onClick={() => inc(product.id)}
							>
								+
							</p>
						</div>
					</Col>

					<Col xs={2}>{`₹${product.price}`}</Col>

					<Col xs={2}>{`₹${product.price * product.qty}`}</Col>
				</Row>
			))}

			<div className="d-flex justify-content-between align-items-center">
				<div className="mt-5">
					<Link to="/">
						<Button
							style={{
								backgroundColor: 'white',
								color: 'purple',
								border: '0',
							}}
						>
							<BsArrowLeft />
							<small className="ms-1 mt-1">Add More Product</small>
						</Button>
					</Link>
				</div>
				<div className="mt-5">
					<Link to="/wishlist">
						<Button
							style={{
								backgroundColor: 'white',
								color: 'purple',
								border: '0',
							}}
						>
							<BsFillHeartFill />
							<small className="ms-1 mt-1">Go To Wishlist</small>
						</Button>
					</Link>
				</div>
			</div>
		</Col>

		<Col
			md={4}
			style={{ backgroundColor: '#F5F5F5' }}
			className="pt-5 px-4 p-lg-5"
		>
			<h5 className="mb-4">Order Summary</h5>
			<hr />
			<div className="d-flex justify-content-between">
				<p>No of Item-{cart.length}</p>
				<p>{`₹${cart.reduce(
					(acc, value) =>
						acc + parseInt(value.price) * parseInt(value.qty),
					0
				)}`}</p>
			</div>
			<p>Shippng</p>

			<Form>
				<Form.Select
					size="sm"
					className="border-0 py-2"
					onChange={deliveryChange}
					value={delivery}
					disabled={!cart.length}
				>
					<option disabled value={0}>
						Choose delivery option
					</option>
					<option value={5}>Standard delivery $5</option>
					<option value={10}>Easy delivery $10</option>
					<option value={20}>VIP Deliver $20</option>
				</Form.Select>

				<Form.Group className="my-3" controlId="formBasicText">
					<Form.Label>Promo Code</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Code here"
						style={{ border: '0' }}
					/>
				</Form.Group>

				<Button
					variant="primary"
					style={{
						borderRadius: '0',
						backgroundColor: '#FA7474',
						border: '0',
					}}
				>
					Apply
				</Button>
			</Form>

			<hr />
			<div className="d-flex justify-content-between">
				<p>Total</p>
				<p>
					₹
					{delivery &&
						parseInt(delivery) +
							cart.reduce(
								(acc, value) => acc + parseInt(value.price) * value.qty,
								0
							)}
				</p>
			</div>

			<Row>
				<Button className="my-3 blue-btn" variant="primary">
					Checkout
				</Button>
			</Row>
		</Col>
	</Row>
</Container>; */
