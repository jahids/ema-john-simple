import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop';
import OrderReview from './component/orderreview/OrderReview';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './component/product/Product';
import Placeorder from './component/placeorder/Placeorder';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header>

      </Header>
       <Switch>

       <Route exact path="/">
       <Shop></Shop>
        </Route>
       
       <Route exact path="/product">
        <Product></Product>
        </Route>

        <Route exact path="/shop">
        <Shop></Shop>
        </Route>


        <Route exact path="/placeorder">
        <Placeorder></Placeorder>
        </Route>
        

        <Route exact path="/orderReview">
        <OrderReview >
        </OrderReview>
        </Route>

        {/* <Route exact path="/review">
        <OrderReview >
        </OrderReview>
        </Route> */}


       </Switch>
      </BrowserRouter>
      
      
    
     
    </div>
  );
}

export default App;
