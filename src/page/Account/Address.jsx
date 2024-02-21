import React, { useState } from 'react';

import FullAddress from '../../components/FullAddress';
import Image from '../../components/Image';

import { BsPlus } from 'react-icons/bs';

import { Button, Col, FloatingLabel, Modal, Form } from 'react-bootstrap';

const Address = () => {
	const initialValue = {
		id: '',
		name: '',
		mobile: '',
		pincode: '',
		state: '',
		address: '',
		town: '',
		district: '',
	};
	const [address, setAddress] = useState(initialValue);
	const [addressList, setAddressList] = useState([]);

	const handleChange = (e) => {
		const { value, name } = e.target;
		setAddress((prev) => ({ ...prev, [name]: value }));
	};

	const submit = (e) => {
		e.preventDefault();
		setAddressList((prev) => [...prev, address]);
		setAddress(initialValue);
		setModal(false);
	};
	//modal
	const [modal, setModal] = useState(false);
	return (
		<>
			<Modal
				show={modal}
				onHide={() => setModal(false)}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Fill the form
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="px-2">
						<FloatingLabel
							controlId="floatingName"
							label="Name"
							id="name"
						>
							<Form.Control
								type="text"
								placeholder="name@example.com"
								className="address-input"
								name="name"
								value={address.name}
								onChange={handleChange}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingNumber"
							label="Mobile"
							id="mobile"
						>
							<Form.Control
								type="number"
								placeholder="mobile"
								name="mobile"
								className="address-input"
								value={address.mobile}
								onChange={handleChange}
							/>
						</FloatingLabel>
						<div className="d-flex my-2">
							<FloatingLabel
								id="pincode"
								controlId="floatingPincode"
								label="Pincode"
								style={{ width: '49%' }}
							>
								<Form.Control
									type="number"
									placeholder="Pincode"
									name="pincode"
									className="address-input me-2"
									value={address.pincode}
									onChange={handleChange}
								/>
							</FloatingLabel>
							<FloatingLabel
								id="state"
								controlId="floatingState"
								label="State"
								style={{ width: '49%' }}
							>
								<Form.Control
									type="text"
									placeholder="State"
									name="state"
									className="address-input ms-2"
									value={address.state}
									onChange={handleChange}
								/>
							</FloatingLabel>
						</div>
						<FloatingLabel
							controlId="floatingAdress"
							label="Address"
							id="address"
						>
							<Form.Control
								type="text"
								placeholder="Address"
								name="address"
								className="address-input"
								value={address.address}
								onChange={handleChange}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingTown"
							label="town/city"
							id="trown"
						>
							<Form.Control
								type="text"
								placeholder="Address"
								name="town"
								className="address-input"
								value={address.town}
								onChange={handleChange}
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingDistrict"
							label="Disctrict"
							id="district"
						>
							<Form.Control
								type="text"
								placeholder="District"
								name="district"
								className="address-input"
								value={address.district}
								onChange={handleChange}
							/>
						</FloatingLabel>
						<Button type="submit" onClick={submit} className="my-2">
							Submit
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
			<Col md={9}>
				{addressList.length ? (
					<>
						<div className="d-flex justify-content-between mt-5 ms-3">
							<h4>Saved Address</h4>
							<div>
								<Button
									onClick={() => setModal(true)}
									variant="outline-primary"
								>
									<BsPlus className="pb-1" size={20} />
									Add Address
								</Button>
							</div>
						</div>
						{addressList.map((address) => (
							<div key={address.name}>
								<FullAddress
									name={address.name}
									address={address.address}
									district={address.district}
									town={address.town}
									pincode={address.pincode}
									state={address.state}
									mobile={address.mobile}
								/>
							</div>
						))}
					</>
				) : (
					<div className="d-flex flex-column mt-5 justify-content-center align-items-center">
						{/* <img src="https://constant.myntassets.com/mymyntra/assets/img/no-saved-address.svg" /> */}
						<Image name="no-saved-address.svg" style={{ width: '30%' }} />
						<p style={{ fontWeight: 'bold' }}>SAVE YOUR ADDRESSES NOW</p>
						<p>
							Add your home and office addresses and enjoy faster
							checkout
						</p>
						<Button
							onClick={() => setModal(true)}
							variant="outline-primary"
						>
							<BsPlus className="pb-1" size={20} />
							Add Address
						</Button>
					</div>
				)}
			</Col>
		</>
	);
};

export default Address;
