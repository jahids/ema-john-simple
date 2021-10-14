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


*/