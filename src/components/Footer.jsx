import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import {
	IoLogoGithub,
	IoLogoTwitter,
	IoLogoLinkedin,
	IoLogoInstagram,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Greetings from "./Greetings";

const Footer = () => {
	const [pageState, setPageState] = useState("Sign In");
	const navigate = useNavigate();
	const auth = getAuth();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setPageState("Profile");
			} else {
				setPageState("Sign In");
			}
		});
	}, [auth]);
	return (
		<div
			className="relative w-[100%] h-[150px] px-5 py-12 flex justify-center items-center flex-col bg-[#18C7FA] shadow-lg shadow-[#18C7FA]"
			id="waves"
		>
			<div className="">
				<div
					className="bg-[url('./assets/logo/wave2.png')] absolute top-[-100px] left-0 w-[100%] h-[100px]  z-1000 opacity-100 bottom-0"
					id="wave1"
				></div>
				<div
					className="bg-[url('./assets/logo/wave2.png')] absolute top-[-100px] left-0 w-[100%] h-[100px] z-999 opacity-50 bottom-[10px]"
					id="wave2"
				></div>
				<div
					className="bg-[url('./assets/logo/wave2.png')] absolute top-[-100px] left-0 w-[100%] h-[100px] z-1000 opacity-20 bottom-[15px]"
					id="wave3"
				></div>
				<div
					className="bg-[url('./assets/logo/wave2.png')] absolute top-[-100px] left-0 w-[100%] h-[100px] z-999 opacity-70 bottom-[20px]"
					id="wave4"
				></div>
			</div>

			<div className="relative flex justify-center items-center my-2.5 mx-0 flex-wrap">
				<a
					href="https://github.com/gateremark"
					className="text-[#e2e2e2] text-3xl my-0 mx-[10px] inline-block transition duration-500 ease-in-out hover:translate-y-[-10px] cursor-pointc"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					<IoLogoGithub />{" "}
				</a>
				<a
					href="https://twitter.com/gatere_mark"
					className="text-[#e2e2e2] text-3xl my-0 mx-[10px] inline-block transition duration-500 ease-in-out hover:translate-y-[-10px] cursor-pointc"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					<IoLogoTwitter />{" "}
				</a>
				<a
					href="https://www.linkedin.com/in/gateremark/"
					className="text-[#e2e2e2] text-3xl my-0 mx-[10px] inline-block transition duration-500 ease-in-out hover:translate-y-[-10px] cursor-pointc"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					<IoLogoLinkedin />{" "}
				</a>
				<a
					href="https://www.instagram.com/gateremark/"
					className="text-[#e2e2e2] text-3xl my-0 mx-[10px] inline-block transition duration-500 ease-in-out hover:translate-y-[-10px] cursor-pointc"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					<IoLogoInstagram />{" "}
				</a>
			</div>
			<ul className="relative text-[#e2e2e2] gap-5 text-lg flex justify-center items-center mt-4 mx-0 flex-wrap">
				<li
					className="hover:text-[#001f41] transition duration-300 ease-in-out cursor-pointc"
					onClick={() => navigate("/")}
				>
					Home
				</li>
				<li
					className="hover:text-[#001f41] transition duration-300 ease-in-out cursor-pointc"
					onClick={() => navigate("/offers")}
				>
					Offers
				</li>
				<li
					className="hover:text-[#001f41] transition duration-300 ease-in-out cursor-pointc"
					onClick={() => navigate("/profile")}
				>
					{pageState}
				</li>
				{pageState !== "Profile" && (
					<li
						className="hover:text-[#001f41] transition duration-300 ease-in-out cursor-pointc"
						onClick={() => navigate("/sign-up")}
					>
						Sign Up
					</li>
				)}
			</ul>
			<Greetings />
			<p className="mt-4 mb-10 text-base text-[#ffffff] text-center">
				&copy; 2023 HomeTopia | All Rights Reserved | by{" "}
				<span className="hover:text-[#001f41] transition duration-300 ease-in-out">
					{" "}
					<a
						href="https://bit.ly/gatere"
						target="_blank"
						rel="noreferrer"
					>
						@gateremark
					</a>{" "}
				</span>
			</p>
		</div>
	);
};

export default Footer;
