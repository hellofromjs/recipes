import "./Header.scss";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

	const [categories, setCategories] = useState([])

	useEffect(() => {
		async function fetchAPI() {
			let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
			response = await response.json()
			setCategories(response.categories)
		}

		fetchAPI()
	}, [])

	return (
		<nav>
			<header className="navbar navbar-expand-lg container d-flex justify-content-between header mt-3">
				<Logo />
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav list-reset d-md-flex">
						<li className="nav-item">
							<Link to="/">Home</Link>
						</li>
						<li className="nav-item dropdown">
							<a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Categories
							</a>
							<ul className="dropdown-menu">
								{categories.map(category => <li key={category.idCategory}><Link className="dropdown-item" to={`/category/${category.strCategory}`}>{category.strCategory}</Link></li>)}
							</ul>
						</li>
						<li className="nav-item">
							<a href="/#">Community</a>
						</li>
						<li className="nav-item">
							<a href="/#">About Us</a>
						</li>
						<li className="nav-item">
							<div className="d-flex gap-3">
								<FaMagnifyingGlass />
								<FaUser />
							</div>
						</li>
					</ul>
				</div>
			</header>
		</nav>
	);
}
