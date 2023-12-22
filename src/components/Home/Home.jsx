import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import RecipeSearch from "../RecipeSearch/RecipeSearch";
import Recipes from "../Recipes/Recipes";

export default function Home() {
	let { id } = useParams();
	return (
		<>
			<Header />
			{!id && <Main />}
			<RecipeSearch />
			<Recipes />
		</>
	);
}
