import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Recipes from "../Recipes/Recipes";

export default function Recipe()
{
    let {id} = useParams()

    const [recipe, setRecipe] = useState([])

	useEffect(() => {
		if (id == null) id = 'Seafood'

		async function fetchAPI() {
			let response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
			response = await response.json()
			console.log(response)
			setRecipe(response)
		}

		fetchAPI()
	}, [id])

    return (
        <>
            <Header/>
            
            Recipe data
        </>
    )
}