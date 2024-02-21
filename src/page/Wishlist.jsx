import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Image from '../components/Image';
import { functions } from '../components/Header';

import { BsArrowLeft } from 'react-icons/bs';
import products from '../services/products';
import { Button, Col, Container, Row, Toast } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
	const { wishlist, setWishlist, cart, setCart, show, setShow } =
		useContext(functions);

	function remove(id) {
		const updatedWishlist = wishlist.filter((wish) => wish.id !== id);
		setWishlist(updatedWishlist);
	}

	function addToCart(id) {
		const isExist = cart.find((product) => product.id === id);
		if (isExist) {
			isExist.qty += 1;
			setShow(true);
			remove(id);
		} else {
			const newProduct = products.find((product) => product.id === id);
			setCart((prev) => [...prev, newProduct]);
			setShow(true);
			remove(id);
		}
	}

	return (
		<>
			{wishlist.length ? (
				<Container>
					<div className="my-5 pt-5 d-flex">
						<h5>My wishlist</h5>
						<p className="ms-2">{wishlist.length} items</p>
					</div>
					<Row className="">
						{wishlist.map((product) => (
							<Col md={3} className="position-relative">
								<span
									className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-secondary"
									style={{
										fontSize: '10px',
										zIndex: '1',
										cursor: 'pointer',
									}}
									onClick={() => remove(product.id)}
								>
									x
								</span>
								<ProductCard
									name={product.name}
									image={product.image}
									price={product.price}
								/>
								<h5 onClick={() => addToCart(product.id)}>
									Move to Bag
								</h5>
							</Col>
						))}
					</Row>
				</Container>
			) : (
				<div
					className="d-flex justify-content-center align-items-center flex-column"
					style={{ minHeight: '100vh', marginTop: '3rem' }}
				>
					<Image name="nowishlist.svg" style={{ maxHeight: '20rem' }} />
					<Link to="/" className="my-4 text-decoration-none">
						Go To Shopping
					</Link>
				</div>
			)}
		</>
	);
};

export default Wishlist;
