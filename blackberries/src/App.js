import './scss/App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Sales from './components/Sales';
import Main from './components/pages/Main';
import ItemPage from './components/pages/ItemPage';
import CartPage from './components/pages/CartPage';
import FavoritesPage from './components/pages/FavoritesPage';

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
