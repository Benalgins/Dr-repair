import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/register';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
