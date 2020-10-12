import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.Config';
import loginImg from '../../images/login.png'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    if(firebase.apps.length > 0){
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const setUserToken = () =>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
     sessionStorage.setItem('token',idToken)
    }).catch(function(error) {
      // Handle error
    });
  }

    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const {displayName,email} = result.user;
            const signInUser = {
                name: displayName,
                email: email
            }
            setUserToken();
            setLoggedInUser(signInUser);
            history.push(from);
        })
        .catch(function(error) {
            console.log(error.message);
        });
    }

    

    return (
        <section className='row'>
            <div className='col-md-6 d-flex align-items-center justify-content-center'>
                <button className='btn btn-info' onClick={handleGoogleLogin}>Login with Google</button>
            </div>
            <div className='col-md-6'>
                <img src={loginImg} alt="" style={{height:'580px'}} className='img-fluid'/>
            </div>
        </section>
    );
};

export default Login;