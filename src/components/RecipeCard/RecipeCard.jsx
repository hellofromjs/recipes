import './RecipeCard.scss';
import clock from '../../img/clock.svg';
import user from '../../img/user.svg';
import stat from '../../img/stat.svg';
import { getRandomInt } from '../../helpers';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
	return (
		<div className="card shadow">
			<div className=' position-relative'>
				<img src={recipe.strMealThumb} className="card-img-top" alt="..." />
				<div className="card__info position-absolute w-100">
					<div className='d-flex'><img src={clock} alt='...' /> <span className='card__info__text'>{getRandomInt(8, 40)} Mins</span></div>
					<div className='d-flex'><img src={user} alt='...' /> <span className='card__info__text'>{getRandomInt(5, 20)} Servings</span></div>
					<div className='d-flex'><img src={stat} alt='...' /> <span className='card__info__text'>Easy</span></div>
				</div>
			</div>

			<div className="card-body">
				<p className="card-text">
					<span className='card__header'>{recipe.strMeal}</span>
					<Link to={`/recipe/${recipe.idMeal}`} className='card__read-more'>View Recipe</Link>
				</p>
			</div>
		</div>
	)
}