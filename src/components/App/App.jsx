import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "../Home/Home";
import RecipePage from "../RecipePage/RecipePage";

export default function App() {
	return (
		<>
			<Router basename={import.meta.env.VITE_REPO_NAME}>
				<Routes>
					<Route path="/" element={<Home />}>
						<Route path="/category/:id" element={<Home />} />
					</Route>
					<Route path="/recipe/:id" element={<RecipePage />} />
				</Routes>
			</Router>

			<Footer />
		</>
	);
}
