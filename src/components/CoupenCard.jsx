import React from 'react';

const CoupenCard = (props) => {
	const { percent, price, code, date, time } = props;
	return (
		<>
			<div
				style={{
					boxShadow: '0 0 4px rgba(40,44,63,0.08)',
					border: '1px solid #EAEAEC',
					color: 'grey',
				}}
				className="mb-3 px-3"
			>
				<div
					className="d-flex"
					style={{ borderBottom: '1px solid #EAEAEC' }}
				>
					<div
						style={{ borderRight: '1px solid #EAEAEC', color: '#14cda8' }}
						className="px-5 d-flex align-items-center pt-3"
					>
						<div>
							<p className="mb-0">{percent}</p>
							<h5>Off</h5>
						</div>
					</div>
					<div className="pt-4 ps-3">
						<p className="mb-0">
							Om minimum purchase of{' '}
							<span style={{ color: 'black' }}>{`Rs ${price}`}</span>
						</p>
						<p>
							Code : <span style={{ color: 'black' }}>{code}</span>
						</p>
					</div>
				</div>
				<div className="d-flex justify-content-between mt-3 mb-2">
					<h6>
						Expire : <span style={{ fontWeight: 'bold' }}>{date}</span> |{' '}
						<span style={{ color: 'black' }}>{time}</span>
					</h6>
					<h6 style={{ fontWeight: 'bold', color: '#526cd0' }}>Details</h6>
				</div>
			</div>
		</>
	);
};

export default CoupenCard;
