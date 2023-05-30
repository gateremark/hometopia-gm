import Logo from "../assets/logo/logonobg.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
	const { pathname } = useLocation();
	// console.log(pathname)
	const pathRoute = (route) => {
		if (route === pathname) {
			// console.log(pathname);
			// console.log(route);
			return true;
		}
	};

	const navigate = useNavigate();
	return (
		<div className="bg-navcolor/50 shadow-md sticky top-0 z-99">
			<header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
				<div>
					<img
						src={Logo}
						className="cursor-pointc h-10"
						alt="HomeTopia Logo"
						onClick={() => navigate("/")}
					/>
				</div>

				<div>
					<ul className="flex space-x-10">
						<li
							className={`cursor-pointc py-3 text-base font-semibold text-[#18C7FA] hover:text-[#9dd8eb] ${
								pathRoute("/") && "border-b-[3px] text-[#9dd8eb]"
							} `}
							onClick={() => navigate("/")}
						>
							Home
						</li>
						<li
							className={`cursor-pointc py-3 text-base font-semibold text-[#18C7FA] hover:text-[#9dd8eb] ${
								pathRoute("/offers") && "border-b-[3px] text-[#9dd8eb]"
							} `}
							onClick={() => navigate("/offers")}
						>
							Offers
						</li>
						<li
							className={`cursor-pointc py-3 text-base font-semibold text-[#18C7FA] hover:text-[#9dd8eb] ${
								pathRoute("/sign-in") && "border-b-[3px] text-[#9dd8eb]"
							} `}
							onClick={() => navigate("/sign-in")}
						>
							Sign In
						</li>
						<li
							className={`cursor-pointc py-3 text-base font-semibold text-[#18C7FA] hover:text-[#9dd8eb] ${
								pathRoute("/sign-up") && "border-b-[3px] text-[#9dd8eb]"
							} `}
							onClick={() => navigate("/sign-up")}
						>
							Sign Up
						</li>
						<li className="cursor-pointc py-3 text-xl font-semibold text-[#334155] items-center hover:text-[#9dd8eb] focus:outline-none focus:ring-offset-2">
							<a href="https://github.com/gateremark/hometopia" target="_blank">
								<FaGithub />
							</a>
						</li>
					</ul>
				</div>
			</header>

			{/* Mobile View */}
		</div>
	);
};

export default Navbar;
