import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>register : Create Account</h2>
            <form onSubmit="" action="">
              <input type="email" placeholder="your email" />
              <br />
              <input type="password" placeholder="Your password" id="" />
              <br />
              
              <input type="password" placeholder="Re enter password" />
              <br />
              <input type="button" value="Submit" />
          </form>
          <p>Already have an account? <Link to="/login">Sign in</Link></p>

          <div>---------or----------</div>
             <button className="regualar-btn">Google Sign in</button>

        </div>
    );
};

export default Register;