export default function Login() {
	return (
		<div className="login">
			<form action="#" method="POST">
				<div className="login-container">
					<h2>Login</h2>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						required
					/>
					<label htmlFor="login-password">Password:</label>
					<input
						type="password"
						id="login-password"
						name="password"
						required
						placeholder="Password"
					/>
					<input type="submit" className="btn submit" value="Login" />
					<p className="field">
						<span>
							If you don't have profile click <a href="/register">here</a>
						</span>
					</p>
				</div>
			</form>
		</div>
	);
}
