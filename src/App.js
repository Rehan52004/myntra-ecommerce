import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import 'animate.css';

import Cart from './page/Cart';
import ProductView from './page/ProductView';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Wishlist from './page/Wishlist';
import Man from './page/Man';
import Women from './page/Women';
import Home from './page/Home';
import Kids from './page/Kids';
import Overview from './page/Account/Overview';
import Profile from './page/Account/Profile';
import Address from './page/Account/Address';
import Order from './page/Account/Order';
import Index from './page/Account';
import Coupens from './page/Account/Coupens';
import MyntraCredits from './page/Account/MyntraCredits';
import MynCash from './page/Account/MynCash';
import SavedCard from './page/Account/SavedCard';
import SavedVpa from './page/Account/SavedVpa';
import MyntraInsider from './page/Account/MyntraInsider';
import TermsOfUse from './page/TermsOfUse';
import PrivacyPolicy from './page/PrivacyPolicy';

const App = () => {
	return (
		<>
			<Header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/women" element={<Women />} />
					<Route path="/man" element={<Man />} />
					<Route path="/kids" element={<Kids />} />
					<Route path="/view/:id" element={<ProductView />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="termsofuse" element={<TermsOfUse />} />
					<Route path="privacypolicy" element={<PrivacyPolicy />} />
					{/* Accounts Routes */}

					<Route path="/my" element={<Index />}>
						<Route path="overview" index element={<Overview />} />
						<Route path="profile" element={<Profile />} />
						<Route path="address" element={<Address />} />
						<Route path="order" element={<Order />} />
						<Route path="coupens" element={<Coupens />} />
						<Route path="myntracredits" element={<MyntraCredits />} />
						<Route path="myncash" element={<MynCash />} />
						<Route path="savedcard" element={<SavedCard />} />
						<Route path="savedvpa" element={<SavedVpa />} />
						<Route path="myntrainsider" element={<MyntraInsider />} />
					</Route>
				</Routes>
			</Header>
		</>
	);
};

export default App;
