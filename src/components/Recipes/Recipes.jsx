import Button from "../Button/Button";
import "./Recipes.scss";
import RecipeCard from "../RecipeCard/RecipeCard";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Recipes() {
	let { id } = useParams();

	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		if (id == null) id = "Seafood";

		async function fetchAPI() {
			let response = await fetch(
				"https://www.themealdb.com/api/json/v1/1/filter.php?c=" + id
			);
			response = await response.json();
			setRecipes(response.meals);
		}

		fetchAPI();
	}, [id]);

	return (
		<section className="recipes container flex-column">
			<div className="recipes__title d-flex justify-content-between align-items-end">
				<div>
					<h3>Discover, Create, Share</h3>
					<p>Check our most popular recipes of this week</p>
				</div>
				<Button className="button-medium">See All</Button>
			</div>

			{id && <h3 className="mb-4">Category: {id}</h3>}

			<div className="recipes__list">
				{recipes.slice(0, 6).map((recipe) => (
					<RecipeCard key={recipe.idMeal} recipe={recipe} />
				))}
			</div>
		</section>
	);
}
