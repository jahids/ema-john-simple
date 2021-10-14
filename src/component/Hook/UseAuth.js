import { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";


const UseAuth = () => {
   
    return useContext(AuthContext);

};

export default UseAuth;
