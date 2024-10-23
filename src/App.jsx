import BrandService from './components/brand-service';
import Header from './components/header';
import Home from './components/home';
import OurOffers from './components/our-offers';
import WorkingOn from './components/working-on';

function App() {
	return (
		<>
			<Header></Header>
			<Home></Home>
			<BrandService></BrandService>
			<OurOffers></OurOffers>
			<WorkingOn></WorkingOn>
		</>
	);
}

export default App;
