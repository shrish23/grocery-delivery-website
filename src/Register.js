import React,{useState} from 'react';
import { Form,Button,Col } from 'react-bootstrap';

import {Link,useHistory} from 'react-router-dom';
import {auth} from './firebase';
import './Register.css';

function Register() {

    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const register = (event) => {
        // event.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((user) => {
                verifyEmail();
                // user.sendEmailVerification()
                // .then(() => {
                //     console.log("verified");
                // })
                // .catch((err) => {
                //     alert(err.message);
                // })           
                // history.push("/");
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    const verifyEmail = (event) => {
        // event.preventDefault();

        auth.sendSignInLinkToEmail(email)
            .then(() => {
                console.log("verified");
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    

    return (
        <div className="register">
            <Link to="/">
                <img
                    className="register_logo"
                    src=""
                    alt="LOGO"
                />
            </Link>

            <div className="login_container">
            <Form>
                <Form.Row>
                    <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Enter Address"  />
                </Form.Group>

                <Form.Row>
                    <Form.Group controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group  controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control accept="number" />
                    </Form.Group>
                </Form.Row>


                <button type="submit" onClick={register}>
                    Sign Up
                </button>
            </Form>
      </div>
        </div>
    )
}

export default Register;
