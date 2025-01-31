import React, { useState } from 'react';

export default function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatpassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password, repeatPassword }),
			});

			if (response.ok) {
				alert('Registration successful!');
			} else {
				alert('Error during registration');
			}
		} catch (err) {
			console.error('Request failed', err);
		}
	};

	return (
		<div className="register">
			<form onSubmit={handleSubmit}>
				<div className="register-container">
					<h2>Register</h2>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<label htmlFor="login-password">Password:</label>
					<input
						type="password"
						id="login-password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						placeholder="Password"
					/>
					<label htmlFor="repeat-password">Repeat Password:</label>
					<input
						type="password"
						id="repeatPassword"
						name="repeatPassword"
						value={repeatPassword}
						onChange={(e) => setRepeatpassword(e.target.value)}
						required
						placeholder="Repeat Password"
					/>
					<input type="submit" className="btn submit" value="Register" />
				</div>
			</form>
		</div>
	);
}
