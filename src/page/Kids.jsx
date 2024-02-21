import React from 'react';
import ProductCard from '../components/ProductCard';
import { Carousel, Col, Container, Nav, Row } from 'react-bootstrap';
import products from '../services/products';
import Image from '../components/Image';

const Man = () => {
	return (
		<>
			<div>
				<div className="mt-5 pt-5">
					<Carousel style={{ width: '100%' }}>
						<Carousel.Item style={{ width: '100%' }}>
							<Image className="d-block w-100" name="slider-1.webp" />
						</Carousel.Item>
						<Carousel.Item>
							<Image className="d-block w-100" name="slider-1.webp" />
						</Carousel.Item>
						<Carousel.Item>
							<Image className="d-block w-100" name="slider-1.webp" />
						</Carousel.Item>
					</Carousel>
				</div>
				<Container className="my-4">
					<Row className="g-4">
						{products.map((product, index) =>
							product.category === 'kids' ? (
								<Col
									key={index}
									sm={6}
									md={4}
									lg={3}
									className="d-flex justify-content-center"
								>
									<ProductCard
										name={product.name}
										price={product.price}
										image={product.image}
										to={`/view/${product.id}`}
									/>
								</Col>
							) : (
								''
							)
						)}
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Man;
