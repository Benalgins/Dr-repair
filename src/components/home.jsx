import BrandService from './brand-service';
import EndQuote from './end-quote';
import OurOffers from './our-offers';
import ServiceMenu from './service-menu';
import WorkingOn from './working-on';

export default function Home() {
	return (
		<>
			<div className="frontal-image">
				<div className="image-container">
					<img
						src="Imgs/background-img.jpg"
						alt=""
						className="background-img"
					/>
				</div>
				<div className="frontal-text">
					<h2>Wellcome to The Garage</h2>
					<p>We are here to take care of your car.</p>
				</div>
			</div>
			<BrandService></BrandService>
			<OurOffers></OurOffers>
			<WorkingOn></WorkingOn>
			<ServiceMenu></ServiceMenu>
			<EndQuote></EndQuote>
		</>
	);
}
