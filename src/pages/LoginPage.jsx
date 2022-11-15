import React from "react";
import { useState } from "react";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import axios from "axios";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case "email":
				return setEmail(value);
			case "password":
				return setPassword(value);
			default:
				return;
		}
	};

	const data = {
		email: email,
		password: password,
	};

	const config = {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	};

	const url = "http://dev.rapptrlabs.com/Tests/scripts/user-login.php";

	const handleSubmit = e => {
		e.preventDefault();
		setIsLoading(true);
		axios
			.post(url, data, config)
			.then(res => console.log(res.data))
			.catch(err => setError(err))
			.finally(() => setIsLoading(false));
		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<h1 className="mb-5">Rapptr Labs</h1>
			<form onSubmit={handleSubmit}>
				<p>Email</p>
				<label className="relative flex items-center text-gray-400 mb-3 ">
					<AiOutlineUser className="w-5 h-5 absolute ml-2 pointer-events-none" />
					<input
						className="border-solid border-2 rounded pr-3 text-sm pl-8 py-2 w-full"
						type="email"
						name="email"
						value={email}
						maxLength="50"
						placeholder="user@rapptrlabs.com"
						onChange={handleChange}
					/>
				</label>
				<p>Password</p>
				<label className="relative flex items-center text-gray-400 mb-3 ">
					<AiFillLock className="w-5 h-5 absolute ml-2 pointer-events-none" />
					<input
						className="border-solid text-sm border-2 rounded pr-3 pl-8 py-2 w-full"
						type="password"
						name="password"
						value={password}
						minLength="4"
						maxLength="16"
						placeholder="Must be at least 4 characters"
						onChange={handleChange}
					/>
				</label>

				<button
					disabled={isLoading}
					type="submit"
					className=" w-full bg-blue-400 text-white"
				>
					{isLoading ? "Loading..." : "Login"}
				</button>
				<p className=" text-center py-1 w-72 mx-auto text-sm text-red-600">
					{error && "The server could not be reached please try again later"}
				</p>
			</form>
		</div>
	);
};

export default LoginPage;
