import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Recipes from '../Recipes/Recipes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from '../Home/Home';
import Recipe from '../Recipe/Recipe';

export default function App() {
  return (
    <>
      <Router basename='/recipes/'>
          <Routes>
            <Route path='/' element={<Home/>}>
              <Route path='/category/:id' element={<Home/>}/>
              <Route path='/recipe/:id' element={<Recipe/>}/>
            </Route>
          </Routes>
      </Router>

      <Footer/>
    </>
  );
}

