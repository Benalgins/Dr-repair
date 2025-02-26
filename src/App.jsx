import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/register';
import PricingPlans from './components/pricing-plans';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/pricing-plans" element={<PricingPlans />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
