import './RecipeCard.scss';
import clock from '../../img/clock.svg';
import user from '../../img/user.svg';
import stat from '../../img/stat.svg';

export default function RecipeCard({ src, time, serving, diff, name }) {
	return (
		<div className="card shadow">
			<div className=' position-relative'>
				<img src={src} className="card-img-top" alt="..." />
				<div className="card__info position-absolute w-100">
					<div className='d-flex'><img src={clock} alt='...' /> <span className='card__info__text'>{time} Mins</span></div>
					<div className='d-flex'><img src={user} alt='...' /> <span className='card__info__text'>{serving} Servings</span></div>
					<div className='d-flex'><img src={stat} alt='...' /> <span className='card__info__text'>{diff}</span></div>
				</div>
			</div>

			<div className="card-body">
				<p className="card-text">
					<span className='card__header'>{name}</span>
					<a href='/#' className='card__read-more'>View Recipe</a>
				</p>
			</div>
		</div>
	)
}