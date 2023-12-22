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
		<header className="container d-flex justify-content-between header">
			<Logo />
			<ul className="list-reset gap-5 d-none d-md-flex">
				<li>
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
