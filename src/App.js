import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Shop from './component/shop/Shop';
import OrderReview from './component/orderreview/OrderReview';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './component/product/Product';
import Placeorder from './component/placeorder/Placeorder';
import Login from './component/Login/Login';
import Register from './component/register/Register';
import Authprovider from './context/Authprovider';
import Privateroute from './privateRoute/Privateroute';
import Inventory from './component/inventory/Inventory';
import Shipping from './component/Shipping/Shipping';

function App() {
  return (
    <div className="App">

<Authprovider>

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



        <Privateroute path="/placeorder">
         <Placeorder></Placeorder>
        </Privateroute>

        <Privateroute path="/inventory">
        <Inventory></Inventory>
        </Privateroute>


        <Privateroute path="/shipping">
        <Shipping></Shipping>
        </Privateroute>

        <Route exact path="/login">
        <Login></Login>
        </Route>


        <Route exact path="/register">
        <Register></Register>
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
      
      </Authprovider>
      
    
     
    </div>
  );
}

export default App;
