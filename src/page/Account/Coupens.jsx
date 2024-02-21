import React from 'react';
import CoupenCard from '../../components/CoupenCard';
import { Col } from 'react-bootstrap';

const Coupens = () => {
	return (
		<>
			<Col md={9}>
				<div className="m-3">
					<CoupenCard
						percent="200"
						price="2999"
						code="PREMIUM2KOF"
						date="DEC 31 2023"
						time="11:37:00 PM"
					/>
					<CoupenCard
						percent="30"
						price="1999"
						code="AREMCUM2KOF"
						date="JAN 31 2023"
						time="01:47:00 PM"
					/>
					<CoupenCard
						percent="30"
						price="1999"
						code="AREMCUM2KOF"
						date="JAN 31 2023"
						time="01:47:00 PM"
					/>
					<CoupenCard
						percent="30"
						price="1999"
						code="AREMCUM2KOF"
						date="JAN 31 2023"
						time="01:47:00 PM"
					/>
				</div>
			</Col>
		</>
	);
};

export default Coupens;
