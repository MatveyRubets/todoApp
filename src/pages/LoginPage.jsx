import React from "react";
import { useState } from "react";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import axios from "axios";

// axios.defaults.baseURL =
// "http://dev.rapptrlabs.com/Tests/scripts/user-login.php";

axios.defaults.headers.post["Content-Type"] =
	"application/x-www-form-urlencoded";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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

	const creds = {
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

		axios
			.post(url, creds, config)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));

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
						className="border-solid border-2 rounded pr-3 pl-8 py-2 w-full"
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
						className="border-solid border-2 rounded pr-3 pl-8 py-2 w-full"
						type="password"
						name="password"
						value={password}
						minLength="4"
						maxLength="16"
						placeholder="4 chars at least"
						onChange={handleChange}
					/>
				</label>
				<button type="submit" className=" w-full bg-blue-400 text-white">
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
