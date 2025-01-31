export default function Header() {
	return (
		<header>
			<div className="header-container">
				<a href="/">
					<div className="logo">
						<div className="logo-img">
							<img src="/Imgs/logo.png" alt="" href="/" />
						</div>
						<div className="site-name">
							<p>Dr.Repair</p>
							<p>Autocenter</p>
						</div>
					</div>
				</a>
				<nav>
					<a href="/about">
						<p>About Us</p>
					</a>
					<a href="#">
						<p>Services</p>
					</a>
					<a href="#">
						<p>Pricing Plans</p>
					</a>
					<a href="#">
						<p>Insurance</p>
					</a>
					<a href="#">
						<p>Contact</p>
					</a>
					<a href="/login">
						<div className="login-menu">
							<div className="login-icon">
								<img src="Imgs/login.png" alt="" />
							</div>
							<p>Log In</p>
						</div>
					</a>
					<a href="/register">
						<div className="register-menu">
							<p>Register</p>
						</div>
					</a>
				</nav>
			</div>
		</header>
	);
}
