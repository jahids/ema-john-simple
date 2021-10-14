import { useEffect, useState } from "react";
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";

const Usefirebase = () => {
   
  const [user,setuser] = useState({}); 

  const auth = getAuth();
  const googleprovider = new GoogleAuthProvider();

//   handle button google

    const signinusingGoogle = () => {
        signInWithPopup(auth,googleprovider)
        .then(result => {
            console.log(result.user);
        })
        


    }

    const logout = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            setuser({});
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });

    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
              
                setuser(user);

            }
          });
          


    }, [])


    return{
        user,
        signinusingGoogle,
        logout
         

    }


};

export default Usefirebase;

