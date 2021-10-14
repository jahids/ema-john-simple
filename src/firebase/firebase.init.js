import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const inisializeAuthentication = () => {

    initializeApp(firebaseConfig);
}

export default inisializeAuthentication;

/*
steps for authentication
-----------------------
1 firebase : create project
2 create web app
3 get configuration
4 initialize firebase
5 enable auth method

step 2
1 create login component
2 create register component
3 create roter for login and register
-----------------------

step 3:
1 set up sign in method
2 setup signout method
3 user state
4 special observer
5 return necessary meethods and state from usefirebase
-----------------------

step 4
1 create a aauth context
2 create context provider
3 use auth provider
4 create useauth hook




*/