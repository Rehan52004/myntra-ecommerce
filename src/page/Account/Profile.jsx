import React, { useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	Row,
	Table,
} from 'react-bootstrap';
import Image from '../../components/Image';

const Profile = () => {
	const [photo, setPhoto] = useState(
		'https://cdn4.iconfinder.com/data/icons/flat-pro-business-set-1/32/people-customer-unknown-512.png'
	);
	const handlePhotoChange = (e) => {
		const file = e.target.files[0];
		const fileURL = URL.createObjectURL(file);
		setPhoto(fileURL);
	};
	return (
		<>
			<Col md={9}>
				<div
					style={{ border: '1px solid #EAEAEC', width: '100%' }}
					className="profile-table mt-2 ms-1"
				>
					<div
						style={{
							borderBottom: '1px solid #EAEAEC',
							width: '60%',
							margin: '0px auto',
						}}
						className="my-5"
					>
						<h5 className="pb-3 ps-3">Profile Details</h5>
					</div>

					<div>
						<Table
							style={{
								width: '60%',
								margin: '0px auto',
								borderColor: 'white',
							}}
						>
							<tbody>
								<tr>
									<td>
										<h5>Full Name</h5>
									</td>
									<td>
										<h5>Abdul Rehan</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Mobile Number</h5>
									</td>
									<td>
										<h5>686294208</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Email ID</h5>
									</td>
									<td>
										<h5>-not added-</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Gender</h5>
									</td>
									<td>
										<h5>Male</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Date of Birth</h5>
									</td>
									<td>
										<h5>-not added-</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Location</h5>
									</td>
									<td>
										<h5>-not added-</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Alternate Mobile</h5>
									</td>
									<td>
										<h5>-not added-</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Hint Name</h5>
									</td>
									<td>
										<h5>-not added-</h5>
									</td>
								</tr>
							</tbody>
						</Table>
						<div style={{ width: '60%', margin: '20px auto' }}>
							<Button
								variant="primary"
								style={{
									backgroundColor: '#E93D67',
									borderRadius: '5px',
									border: 'none',
									color: 'white',
									width: '100%',
								}}
								className="pt-3 pb-2"
							>
								<h5 style={{ fontWeight: 'bold' }}>Edit</h5>
							</Button>
						</div>
					</div>
				</div>
			</Col>
		</>
	);
};

export default Profile;
