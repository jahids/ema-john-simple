import React from 'react';
import { Link,useHistory,useLocation} from 'react-router-dom';
import inisializeAuthentication from '../../firebase/firebase.init';
import UseAuth from '../Hook/UseAuth';


import "./login.css"
inisializeAuthentication();

const Login = () => {
    const {signinusingGoogle} = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || "/shop";

    const handleGoogleLogin = () => {

        signinusingGoogle()
        .then(result => {
            history.push(redirect);
        })
    
        
    }

    return (
        <div className="login-form" >
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                 <input type="email" name="" placeholder="Your email" id="" />
                 <br />
                 <input type="password" placeholder="Your password" name="" id="" />
                 <br />
                 <input type="submit" placeholder="submit" value="submit" />
 
                </form>
                <p>new to ema-john <Link to="/register">create Account</Link></p>
            </div>
            <div>---------or----------</div>
             <button onClick={handleGoogleLogin} className="regualar-btn">Google Sign in</button>
        </div>
    );
};

export default Login;  