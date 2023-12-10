import "./Header.scss";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Logo from "../Logo/Logo";

export default function Header() {
	return (
		<header className="container d-flex justify-content-between header">
			<Logo />
			<ul className="list-reset gap-5 d-none d-md-flex">
				<li>
					<a href="/#">Home</a>
				</li>
				<li>
					<a href="/#">Recipe</a>
				</li>
				<li>
					<a href="/#">Community</a>
				</li>
				<li>
					<a href="/#">About Us</a>
				</li>
			</ul>
			<div className="d-flex gap-3">
				<FaMagnifyingGlass />
				<FaUser />
			</div>
		</header>
	);
}
