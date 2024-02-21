import React from 'react';

import { GrDropbox } from 'react-icons/gr';
import OverviewCard from '../../components/OverviewCard';
import { Col, Row } from 'react-bootstrap';

const Overview = () => {
	return (
		<>
			<Col md={8}>
				<div
					className="d-flex justify-content-between p-4 mt-4 m-1"
					style={{ backgroundColor: '#f5f4f4c2' }}
				>
					<div
						style={{
							height: '120px',
							width: '120px',
							backgroundColor: 'grey',
						}}
					></div>
					<p>Edit</p>
				</div>
				<Row className="m-1 g-3">
					<OverviewCard
						icon={<GrDropbox size={20} />}
						heading="Order"
						para="Check your order status"
					/>
					<OverviewCard
						icon={<GrDropbox size={20} />}
						heading="Order"
						para="Check your order status"
					/>
					<OverviewCard
						icon={<GrDropbox size={20} />}
						heading="Order"
						para="Check your order status"
					/>
					<OverviewCard
						icon={<GrDropbox size={20} />}
						heading="Order"
						para="Check your order status"
					/>
					<OverviewCard
						icon={<GrDropbox size={20} />}
						heading="Order"
						para="Check your order status"
					/>
					<OverviewCard
						icon={<GrDropbox size={20} />}
						heading="Order"
						para="Check your order status"
					/>
					<OverviewCard
						icon={<GrDropbox size={20} />}
						heading="Order"
						para="Check your order status"
					/>
					<OverviewCard
						icon={<GrDropbox size={20} />}
						heading="Order"
						para="Check your order status"
					/>
					<OverviewCard
						icon={<GrDropbox size={20} />}
						heading="Order"
						para="Check your order status"
					/>
				</Row>
			</Col>
		</>
	);
};

export default Overview;
