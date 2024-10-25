export default function Footer() {
	return (
		<footer className="footer">
			<div className="about-us">
				<h4>About us</h4>
				<div className="footer-icons">
					<div className="instagram-icon">
						<img src="./Imgs/instagram.png" alt="" />
					</div>
					<div className="facebook-icon">
						<img src="./Imgs/facebook.png" alt="" />
					</div>
				</div>
				<p>
					Welcome to Dr. Repair, your trusted auto service and repair facility
					in Varna, Bulgaria! At Dr. Repair, we specialize in comprehensive
					automotive services for all makes and models, offering everything from
					standard maintenance and repairs to custom modifications and
					performance tuning. <br />
					Whether you need routine maintenance, specialized repairs, or are
					looking to enhance your car's performance, Dr. Repair is here to
					provide unmatched service in Varna.
				</p>
			</div>
			<div className="where-to-find-us">
				<h4>Where to find us</h4>
				<p>We are located at Varna Bulgaria</p>
				<div className="footer-contacts">
					<div className="location">
						<img src="" alt="" />
					</div>
					<div className="phonenumber">
						<img src="" alt="" />
					</div>
				</div>
				<div className="working-hours">
					<h4>Business Hours</h4>
					<p>Monday-Friday: 8:30 - 19:00</p>
				</div>
			</div>
		</footer>
	);
}
