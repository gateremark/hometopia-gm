import { useState } from "react";
import SignupImage from "../assets/logo/keypana.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { db } from "../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const Signup = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const { name, email, password } = formData;
	const navigate = useNavigate();
	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const auth = getAuth();
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
			);

			updateProfile(auth.currentUser, {
				displayName: name,
			});
			const user = userCredential.user;
			const formDataCopy = { ...formData };
			delete formDataCopy.password;
			formDataCopy.timestamp = serverTimestamp();

			await setDoc(doc(db, "users", user.uid), formDataCopy);
			navigate("/");
			toast.success(`Welcome ${name}`)
		} catch (error) {
			const errorMessage = error.message;
			// console.log(errorMessage)
			toast.error(errorMessage)
		}
	};
	return (
		<section>
			<h1 className="text-4xl text-center mt-6 font-bold text-[#202e3d]">
				Sign Up
			</h1>
			<div className="flex justify-center flex-wrap items-center p-6 max-w-6xl mx-auto">
				<div className="md:w-[67%] lg:w-[45%] mb-12 mb:mb-6">
					<img src={SignupImage} alt="Signin Image" className="w-full" />
				</div>
				<div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
					<form action="" onSubmit={onSubmit}>
						<input
							type="text"
							id="name"
							value={name}
							onChange={onChange}
							placeholder="Full Name"
							className="mb-6 w-full px-4 py-2 text-xl text-[#ffffff] bg-[#3c546e] placeholder:text-[#808080] rounded transition ease-in-out"
						/>
						<input
							type="email"
							id="email"
							value={email}
							onChange={onChange}
							placeholder="Email Address"
							className="mb-6 w-full px-4 py-2 text-xl text-[#ffffff] bg-[#3c546e] placeholder:text-[#808080] rounded transition ease-in-out"
						/>
						<div className="relative mb-6">
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								value={password}
								onChange={onChange}
								placeholder="Password"
								className="w-full px-4 py-2 text-xl text-[#ffffff] bg-[#3c546e] placeholder:text-[#808080] rounded transition ease-in-out"
							/>
							{showPassword ? (
								<FaEye
									className="absolute right-3 top-3 text-xl cursor-pointc"
									onClick={() => setShowPassword((prevState) => !prevState)}
								/>
							) : (
								<FaEyeSlash
									className="absolute right-3 top-3 text-xl cursor-pointc"
									onClick={() => setShowPassword((prevState) => !prevState)}
								/>
							)}
						</div>
						<div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
							<p className="text-[#172431] font-light mb-6">
								Have an Account?
								<Link
									to="/sign-in"
									className="text-[#172431] font-semibold transition duration-500 ease-in-out hover:text-[#3c546e]"
								>
									{" "}
									Sign In
								</Link>
							</p>
							{/* <p>
								<Link
									to="/forgot-password"
									className="text-[#7e1e1e] font-semibold transition duration-500 ease-in-out hover:text-[#af4646]"
								>
									Forgot Password?
								</Link>
							</p> */}
						</div>
						<button
							type="submit"
							className="w-full bg-[#10192D] text-[#fff] font-medium uppercase shadow-lg hover:shadow-xl sha p-2 rounded cursor-pointc text-xl hover:bg-[#192d41] transition duration-200 ease-in-out active:bg-[#10192D]"
							title="Sign Up"
						>
							Sign Up
						</button>
						<div className="flex my-4 items-center before:border-t before:flex-1 before:border-[#6f859b] after:border-t after:flex-1 after:border-[#6f859b]">
							<p className="text-center font-semibold mx-4 text-[#42505e]">
								OR
							</p>
						</div>
						<OAuth />
					</form>
				</div>
			</div>
		</section>
	);
};

export default Signup;
