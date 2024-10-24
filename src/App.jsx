import BrandService from './components/brand-service';
import EndQuote from './components/end-quote';
import Header from './components/header';
import Home from './components/Home';
import OurOffers from './components/our-offers';
import ServiceMenu from './components/service-menu';
import WorkingOn from './components/working-on';

function App() {
	return (
		<>
			<Header></Header>
			<Home></Home>
			<BrandService></BrandService>
			<OurOffers></OurOffers>
			<WorkingOn></WorkingOn>
			<ServiceMenu></ServiceMenu>
			<EndQuote></EndQuote>
		</>
	);
}

export default App;
