import React, { useEffect, useRef, useState } from 'react';
const useIntersectionObserver = (setVisibleClass) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries, observerInstance) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view');

						observerInstance.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.8, rootMargin: '0px 0px -50px 0px' }
		);

		const elements = document.querySelectorAll(setVisibleClass);
		elements.forEach((el) => observer.observe(el));

		return () => {
			elements.forEach((el) => observer.unobserve(el));
		};
	}, [setVisibleClass]);
};

export default function OurOffers() {
	useIntersectionObserver('.text-holder');
	useIntersectionObserver('.offer');
	return (
		<div className="our-offers">
			<div className="img-container">
				<div className="background-image"></div>
			</div>
			<div className="text-holder">
				<h3>Offering you the best solution for your car.</h3>
				<div className="golden-line"></div>
				<p>
					Dr.Rpair is a dedicated facility offering complete auto repair,
					maintenance, vehicle modification, and performance tuning services for
					all types of cars and trucks in Varna, Bulgaria. We are proud to offer
					our clients the highest level of automotive service possible with some
					of the industry's most knowledgeable technicians. European, Import,
					Exotic, & Domestic
				</p>
			</div>
			<div className="offers">
				<div className="offer">
					<div className="img-offer">
						<img src="/Imgs/Wrench-screwdriver-icon.png" alt="" />
					</div>
					<div className="description">
						<h4>Service of All Makes & Models</h4>
						<p>
							We welcome all brands of cars and trucks into the Garage. Our
							knowledgable technicians are have experience working on just about
							any vehicle on the road!
						</p>
					</div>
				</div>
				<div className="offer">
					<div className="img-offer">
						<img src="/Imgs/wallet.png" alt="" />
					</div>
					<div className="description">
						<h4>Unbeatable Prices</h4>
						<p>
							Experience unbeatable prices on top-quality car services,
							delivering exceptional value without compromising on quality.
						</p>
					</div>
				</div>
				<div className="offer">
					<div className="img-offer">
						<img src="/Imgs/star.png" alt="" />
					</div>
					<div className="description">
						<h4>Industry Leading Technicians</h4>
						<p>
							You wouldn't trust your vehicle with just anyone, we get it. At
							the Dr.Repair, the experience of our technicians is as diverse as
							the vehicles that roll through our doors.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
