import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
