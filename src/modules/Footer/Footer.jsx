import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Footer.scss';

export default function Footer() {
	return (
		<footer className='footer container'>
			<Logo />

			<div className='footer__row d-flex'>
				<div className='footer__links d-flex'>
					<div>
						<h3>Menu</h3>
						<ul>
							<li><a href='/#'>Home</a></li>
							<li><a href='/#'>Recipe</a></li>
							<li><a href='/#'>Community</a></li>
							<li><a href='/#'>About Us</a></li>
						</ul>
					</div>
					<div>
						<h3>Categories</h3>
						<ul>
							<li><a href='/#'>Breakfast</a></li>
							<li><a href='/#'>Lunch</a></li>
							<li><a href='/#'>Dinner</a></li>
							<li><a href='/#'>Dessert</a></li>
							<li><a href='/#'>Drink</a></li>
						</ul>
					</div>
					<div>
						<h3>Social</h3>
						<ul>
							<li><a href='/#'>Instagram</a></li>
							<li><a href='/#'>Twitter</a></li>
							<li><a href='/#'>Youtube</a></li>
							<li><a href='/#'>Facebook</a></li>
						</ul>
					</div>
				</div>
				<div className='footer__right'>
					<h3>Sign up for our newsletter</h3>
					<div className='d-flex footer__signup'>
						<input type='text' className='footer__email' placeholder='Your Email Address' />
						<Button className="button-medium" style={{marginBottom: '5px'}}>Submit</Button>
					</div>

				</div>
			</div>
		</footer>
	)
}