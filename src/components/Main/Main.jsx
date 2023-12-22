import './Main.scss'

import '../../scss/_base.scss'

import dish from '../../img/dish.png'
import Button from '../Button/Button'

export default function Main()
{
    return (
        <main className='main container d-flex'>
            <div>
            <h2>Cooking Made Fun and Easy: Unleash Your Inner Chef</h2>
            <p>Discover more than <span className='brand-text'>10,000 recipes</span> in your hand with the best recipe. Help you to find the easiest way to cook.</p>
            <Button className="button-large">Explore Recipes</Button>
            </div>
            <div className='right-side'>
            <img src={dish} className='w-100' alt='...'/>
            </div>
            
        </main>
    )
}