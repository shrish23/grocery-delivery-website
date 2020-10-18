import React,{useState} from 'react';

import {Link,useHistory} from 'react-router-dom';
import {auth} from './firebase';
import './Login.css';

function Login() {

    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    var actionCodeSettings = {
        url: 'http://localhost:3000',
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        handleCodeInApp: true,
        // When multiple custom dynamic link domains are defined, specify which
        // one to use.
        dynamicLinkDomain: "grocerydelivery.page.link"
      };

    const signIn = (event) => {
        event.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(() => {
                history.push("/");
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    const register = (event) => {
        event.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((user) => {
                // history.push("/emailVerify");
                history.push("/");
                console.log(user);
                auth.currentUser.sendEmailVerification(actionCodeSettings)
                .then(function() {
                    // Verification email sent.
                  })
                  .catch(function(error) {
                    alert(error.message)
                  })
                }    
            )
            .catch((err) => {
                alert(err.message);
            })
    }


    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src=""
                    alt="LOGO"
                />
            </Link>

            <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>

        {/* <Link to="/register"> */}
            <button  onClick={register} className="login_registerButton">
            Create your Account
            </button>
        {/* </Link> */}
      </div>
        </div>
    )
}

export default Login;
