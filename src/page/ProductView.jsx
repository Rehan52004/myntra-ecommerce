import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RxCross1 } from 'react-icons/rx';
import { BsFillHandbagFill } from 'react-icons/bs';
import { AiOutlineHeart, AiTwotoneStar } from 'react-icons/ai';

import Image from '../components/Image';
import products from '../services/products';
import { functions } from './../components/Header';

import { Button, Card, Col, Container, Row, Toast } from 'react-bootstrap';

const ProductView = () => {
	const [product, setProduct] = useState('loading');
	const [wish, setWish] = useState('');
	const { cart, setCart, wishlist, setWishlist, show, setShow } =
		useContext(functions);

	const id = Number(useParams().id);

	const getProduct = () => {
		try {
			const response = products.find((product) => product.id === id);
			if (response) {
				setProduct(response);
				setWish(response);
			}
		} catch (e) {
			alert(e);
		}
	};

	function addToWishlist() {
		const isExist = wishlist.find((wish) => wish.id === id);
		if (!isExist) {
			setWishlist((prev) => [...prev, wish]);
		} else {
			const updateWishlist = wishlist.filter((wish) => wish.id !== id);
			setWishlist(updateWishlist);
		}
		setShow(true);
	}

	function addToCart() {
		const isExist = cart.find((product) => product.id === id);
		if (isExist) {
			isExist.qty += 1;
		} else {
			setCart((prev) => [...prev, product]);
		}
		setShow(true);
	}

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<>
			<Container fluid className="mt-5 pt-5">
				<p className="my-3">
					Home/Clothing/Men Clothing/Jackets/{' '}
					<span style={{ fontWeight: 'bold' }}>
						LOCOMOTIVE Jackets - More By LOCOMOTIVE
					</span>
				</p>
				<Row className="p-2 mt-2">
					<Col lg={7}>
						<Row>
							<Col md={6}>
								<Image name={product.image} />
							</Col>
							<Col md={6}>
								<Image name={product.image} />
							</Col>
						</Row>
					</Col>
					<Col lg={5} className="px-4">
						<h3 style={{ fontWeight: '700', textTransform: 'uppercase' }}>
							{product.name}
						</h3>
						<h4 style={{ fontWeight: '500', color: 'grey' }}>
							{product.description}
						</h4>
						<div
							className="px-2 mt-3"
							style={{
								border: '1px solid grey',
								display: 'inline-block',
							}}
						>
							<span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
								4.1
							</span>{' '}
							<AiTwotoneStar
								size={20}
								style={{ color: '#03a685', marginBottom: '5px' }}
							/>{' '}
							| 546 Rating
						</div>
						<hr />
						<h3>
							{`₹${product.price}`}{' '}
							<span
								style={{ color: 'grey', fontSize: '1.5rem' }}
								className="mx-2"
							>
								MRP
								<del> ₹1399</del>
							</span>
						</h3>
						<p style={{ color: '#03a685', fontWeight: 'bold' }}>
							inclusive of taxes
						</p>
						<h5>SELECT SIZE</h5>
						<div className="d-flex my-4">
							<div
								style={{
									height: '55px',
									width: '55px',
									border: '1px solid black',
									borderRadius: '30px',
								}}
								className="d-flex justify-content-center align-items-center mx-1"
							>
								<p className="mb-0">S</p>
							</div>
							<div
								style={{
									height: '55px',
									width: '55px',
									border: '1px solid black',
									borderRadius: '30px',
								}}
								className="d-flex justify-content-center align-items-center mx-1"
							>
								<p className="mb-0">M</p>
							</div>
							<div
								style={{
									height: '55px',
									width: '55px',
									border: '1px solid black',
									borderRadius: '30px',
								}}
								className="d-flex justify-content-center align-items-center mx-1"
							>
								<p className="mb-0">L</p>
							</div>
							<div
								style={{
									height: '55px',
									width: '55px',
									border: '1px solid black',
									borderRadius: '30px',
								}}
								className="d-flex justify-content-center align-items-center mx-1"
							>
								<p className="mb-0">XL</p>
							</div>
						</div>
						<div className="d-sm-flex">
							<Button
								variant="primary"
								style={{
									backgroundColor: '#E93D67',
									borderRadius: '5px',
									border: 'none',
									color: 'white',
								}}
								className="mx-2 pb-2 pt-3 w-100"
								onClick={addToCart}
							>
								<div className="d-flex justify-content-center">
									<BsFillHandbagFill size={20} />
									<h5 style={{ fontWeight: 'bold' }} className="ms-3">
										Add to Bag
									</h5>
								</div>
							</Button>

							<Button
								variant="outline-primary"
								style={{
									fontWeight: 'bold',
									color: 'black',
									borderColor: 'grey',
								}}
								className="d-flex justify-content-center align-items-center mx-2 w-100 mt-2 mt-sm-0"
								onClick={addToWishlist}
							>
								<AiOutlineHeart
									size={25}
									style={{ marginBottom: '3px' }}
								/>
								<h5 className="ms-3">Wishlist</h5>
							</Button>
						</div>
						<hr />
						<h5 style={{ fontWeight: 'bold' }}>Delivery Option </h5>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Aliquam repudiandae illo tenetur praesentium. Voluptatem
							voluptates quisquam voluptatum aliquid qui similique
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ProductView;

/* <div className="product-view d-flex align-items-center">
	<Container>
		<Row className="justify-content-center">
			<Col md={5} className="d-flex align-items-center">
				<Card style={{ border: '0' }}>
					<Image name={product.image} style={{ width: '300px' }} />
				</Card>
			</Col>
			<Col md={5} className="p-xs-2 p-md-5">
				<div className="d-flex justify-content-between">
					<div>
						<p>{product.brand}</p>
						<h2>{product.name}</h2>
						<small>Made by Rehan</small>
					</div>

					<Link to="/">
						<h3>
							<RxCross1 className="bg-dark  text-white " />
						</h3>
					</Link>
				</div>
				<hr />
				<div className="d-flex mb-3">
					<div className="me-2">Available Colors:</div>
					<div
						className="available-color mx-1"
						style={{ backgroundColor: 'yellow' }}
					></div>
					<div
						className="available-color mx-1"
						style={{ backgroundColor: 'red' }}
					></div>
					<div
						className="available-color mx-1"
						style={{ backgroundColor: 'black' }}
					></div>
				</div>
				<div>
					<h5>Description</h5>
					<p>{product.description}</p>
				</div>
				<hr />
				<h3>{`₹${product.price}`}</h3>
				<div className="d-flex ">
					<Button
						variant="dark"
						onClick={addToCart}
						style={{
							borderRadius: '0',
							backgroundColor: '#FA7474',
							border: 'none',
							width: '100%',
							marginRight: '10px',
						}}
					>
						Add to Cart
					</Button>

					<div
						ref={elem}
						onClick={addToWishlist}
						className="d-flex align-items-center p-1"
						style={{
							height: '45px',
							width: '45px',
						}}
					>
						<BsFillHeartFill size={40} />
					</div>
				</div>
			</Col>
		</Row>

		<Toast
			onClose={() => setShow(false)}
			show={show}
			delay={3000}
			autohide
			className="position-fixed bottom-0 end-0 m-5"
		>
			<Toast.Header>
				<img
					src="holder.js/20x20?text=%20"
					className="rounded me-2"
					alt=""
				/>
				<strong className="me-auto text-dark">Succesfully Added</strong>
			</Toast.Header>
		</Toast>
	</Container>
</div>; */
