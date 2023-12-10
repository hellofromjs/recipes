import Button from "../Button/Button";
import './Recipes.scss'
import RecipeCard from "../RecipeCard/RecipeCard";

import raspberry_pancake from '../../img/raspberry_pancake.png'
import crunchy_potatoes from '../../img/crunchy_potatoes.png'
import creamy_salad from '../../img/creamy_salad.png'
import beef_teriyaki from '../../img/beef_teriyaki.png'
import mushroom_soup from '../../img/mushroom_soup.png'
import tofu_tomatoes_soup from '../../img/tofu_tomatoes_soup.png'

export default function Recipes() {
	return (
		<section className="recipes container flex-column">
			<div className="recipes__title d-flex justify-content-between align-items-end">
				<div>
					<h3>Discover, Create, Share</h3>
					<p>Check our most popular recipes of this week</p>
				</div>
				<Button className="button-medium">See All</Button>
			</div>

			<div className="recipes__list d-flex">
				<RecipeCard src={creamy_salad} time={10} serving={2} diff="Easy" name="Creamy Salad" />
				<RecipeCard src={tofu_tomatoes_soup} time={15} serving={3} diff="Easy" name="Tofu Tomatoes Soup " />
				<RecipeCard src={crunchy_potatoes} time={10} serving={2} diff="Easy" name="Crunchy Potatoes" />
				<RecipeCard src={mushroom_soup} time={25} serving={2} diff="Medium" name="Mushroom Soup" />
				<RecipeCard src={raspberry_pancake} time={30} serving={1} diff="Easy" name="Raspberry Pancake" />
				<RecipeCard src={beef_teriyaki} time={20} serving={1} diff="Medium" name="Beef Teriyaki" />
			</div>

		</section>
	)
}