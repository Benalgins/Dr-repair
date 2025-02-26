export default function PricingPlans() {
	return (
		<div className="pricing-plans">
			<div className="pricing-plans title">
				<h3>Choose your Service Plan</h3>
			</div>
			<div className="plans">
				<div className="cheap plan">
					<div className="plan-header">
						<div className="plan-img">
							<img src="/Imgs/cheap-plan.png" alt="" />
						</div>
						<div className="text">
							<h3>Monthly:</h3>
							<h2>150$</h2>
							<div className="description">
								<ul>
									<li>
										<img src="/Imgs/checkimg.png" alt="" className="img-has" />
										<p>Tyre Change</p>
									</li>
									<li>
										<img src="/Imgs/checkimg.png" alt="" className="img-has" />
										<p>Oil Change</p>
									</li>
									<li>
										<img src="/Imgs/checkimg.png" alt="" className="img-has" />
										<p>Road Assistance (24/7) for Varna</p>
									</li>
									<li>
										<img src="/Imgs/checkimg.png" alt="" className="img-has" />
										<p>Vehicle maintenance for annual check</p>
									</li>
									<li></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="best-offer plan">
					<div className="plan-header">
						<div className="plan-img"></div>
						<div className="text">
							<h3>Monthly:</h3>
							<h2>225$</h2>
						</div>
					</div>
				</div>

				<div className="premium plan">
					<div className="plan-header">
						<div className="plan-img"></div>
						<div className="text">
							<h3>Monthly:</h3>
							<h2>350$</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
