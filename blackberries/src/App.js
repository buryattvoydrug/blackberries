import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sales from './components/Sales';
import Main from './components/pages/Main/Main';
import ItemPage from './components/pages/ItemPage/ItemPage';
import CartPage from './components/pages/CartPage/CartPage';
import FavoritesPage from './components/pages/Favorites/FavoritesPage';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
      </div>
      <div className="page-container">
        {/* <ItemPage/>
        <CartPage/> */}
        {/* <FavoritesPage/> */}
        <Main/>
      </div>
      <Sales/>
      <Footer/>
    </div>
  );
} 

export default App;
