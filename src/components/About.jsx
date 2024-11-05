export default function About() {
	return (
		<div className="about">
			<div className="about-frontal">
				<h2>
					About <span>Dr.Repair</span> Autocenter
				</h2>
			</div>
			<div className="description">
				<h3>We're a team of car enthusiasts with a passion for what we do.</h3>
				<p>
					Our speciality is European and Exotic vehicles however our
					knowledgeable technicians are experienced with all brands of cars and
					trucks! From routine oil changes to extensive performance
					modifications and everything in between, our team is equipped to
					handle any required service for your vehicle.
				</p>
				<p>
					At Dr.Repair Autocenter, we take a progressive approach to servicing,
					maintaining, and upgrading all types of vehicles, whether they belong
					to our loyal customers or new clients seeking top-tier automotive
					care.
				</p>
				<h6>
					Welcome to Dr.Repair, setting a new standard for automotive repair,
					maintenance, and modification.
				</h6>
			</div>
			<div className="more-about">
				<div className="card-container">
					<div className="card">
						<div className="img-container">
							<img src="/Imgs/best-technicians.jpg" alt="" />
						</div>
						<div className="card-description">
							<h5>Knowledgabe Technicians</h5>
							<p>
								We know how important trust is.
								<br /> With decades of combined experience, our team's level of
								diverse automotive knowledge ensures that no matter what repairs
								or servicing we do to your vehicle, it's done right the first
								time.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="img-container">
							<img src="/Imgs/trusted-european-service.jpg" alt="" />
						</div>
						<div className="card-description">
							<h5>Service of All Make & Models</h5>
							<p>
								Cars, trucks, and everything in between.
								<br /> One of the greatest benefits that comes with having BC's
								most elite technicians is being able to provide service on
								virtually any make and model that rolls through our bay doors.
							</p>
						</div>
					</div>
					<div className="card">
						<div className="img-container">
							<img src="/Imgs/aftermarket-card.jpg" alt="" />
						</div>
						<div className="card-description">
							<h5>Aftermarket Upgrades</h5>
							<p>
								We love modifying vehicles at the Dr.Repair! Our team provides a
								wide variety of aftermarket upgrade options for both cars &
								trucks including wheels, suspension, tuning, exhaust, and much
								more! Browse our extensive selection of aftermarket parts and
								accessories.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
