import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import NotFoundPage from './Page/NotFoundPage';
import Footer from './components/Footer';
import MainPage from './Page/MainPage';
import AllCategoriesPage from './Page/AllCategoriesPage';
import AllProductsPage from './Page/AllProductsPage';
import AllSalesPage from './Page/AllSalesPage';
import CategoriesPage from './Page/CategoriesPage';
import ProductInfoPage from './Page/ProductIndoPage';
import Basket from './Page/BasketPage';






function App() {

  return (
    <div>
        <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/categories' element={<AllCategoriesPage/>}/>
              <Route path='/allproducts' element={<AllProductsPage/>}/>
              <Route path='/allsales' element={<AllSalesPage/>}/>
              <Route path='/categories/:id/' element={<CategoriesPage/>}/>
              <Route path='/products/:id/' element={<ProductInfoPage/>}/>
              <Route path='/basket' element={<Basket/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
