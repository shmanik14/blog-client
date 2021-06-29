//firebase
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import firebaseConfig from "./firebase.config";
import "./Login.css";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app();
}

const Login = () => {
    const [user, setUser] = useContext(userContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    // handles setting auth token in the session storage
    const handleAuthToken = () => {
        firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem("token", idToken);
                history.replace(from);
            })
            .catch(function (error) {
                handleErrorMessage(error);
            });
    };

    // handles user info
    const handleUser = (name, email, photoURL, whetherLoggedIn) => {
        const newUser = { ...user };
        if (name !== undefined) {
            newUser.name = name;
        }
        if (email !== undefined) {
            newUser.email = email;
        }
        if (photoURL !== undefined) {
            newUser.photoURL = photoURL;
        }
        if (whetherLoggedIn !== undefined) {
            newUser.isLoggedIn = true;
        }
        setUser(newUser);
        handleAuthToken();
    };



    const handleErrorMessage = (error) => {
        const errorMessage = error.message;
        const newUser = { ...user };
        newUser.error = errorMessage;
        setUser(newUser);
    };

    // Register with email and password
    const handleSignUp = (name, userEmail, userPassword) => {
        const doesPasswordsMatch = checkPasswords();
        if (doesPasswordsMatch) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(userEmail, userPassword)
                .then((userCredential) => {
                    const { email } = userCredential.user;
                    handleUser(name, email, undefined, true);
                    sessionStorage.setItem("email", email);
                    sessionStorage.setItem("name", name);
                    handleAuthToken();
                })
                .catch((error) => {
                    handleErrorMessage(error);
                });
        } else {
            const newUser = { ...user };
            newUser.error = "Your Passwords don't match";
            setUser(newUser);
        }
    };

    // Sign in with email and password
    const handleLogIn = (userEmail, userPassword) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(userEmail, userPassword)
            .then((userCredential) => {
                const { email } = userCredential.user;
                handleUser(undefined, email, undefined, true);
                sessionStorage.setItem("email", email);
            })
            .catch((error) => {
                handleErrorMessage(error);
            });
    };

    // React hook form
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        data.name
            ? handleSignUp(data.name, data.email, data.password)
            : handleLogIn(data.email, data.password);
    };

    // Toggling sign up and sign in
    const toggleForm = (e) => {
        e.preventDefault();
        const newUser = { ...user };
        newUser.isNewUser = !newUser.isNewUser;
        newUser.error = "";
        setUser(newUser);
    };

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    // Checking passwords
    const handleBlur = (e) => {
        if (e.target.name === "password") {
            setPassword(e.target.value);
        }
        if (e.target.name === "confirmPassword") {
            setConfirmPassword(e.target.value);
        }
    };

    // checks if the two passwords match
    const checkPasswords = () => {
        return password === confirmPassword;
    };
    return (
        <section>
        <div className="form-card">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="login-heading">Log In</h3>
                {user.isNewUser && (
                    <input type="text" name="name" className="form-control"
                        {...register("name", { required: true })} placeholder="Your Name"
                    />
                )}
                <input type="email" name="email" className="form-control" placeholder="Your Email"
                    {...register("email", { required: true, pattern: /\S+@\S+\.\S+/})}           
                />
                {errors && (<span className="error">
                        {errors.email.type === "required" ? "Email is required" : "Your Email pattern is not correct"}
                    </span>
                )}
                <input type="password" name="password" className="form-control"
                    {...register("password", {required: true})}
                    placeholder="Your Password"
                    onBlur={handleBlur}
                />
                {errors && (
                    <span className="error">
                        {errors.password.type === "required" &&
                            "Password is required"}
                    </span>
                )}
                {user.isNewUser && (
                    <input type="password" name="confirmPassword"
                        {...register("confirmPassword", { required: true })}
                        placeholder="Confirm Your Password" className="form-control"
                        onBlur={handleBlur}
                    />
                )}
                {errors && (
                    <span className="error">
                        {errors.confirmPassword.type === "required" &&
                            "Password is required"}
                    </span>
                )}
                
                <p className="error">{user.error}</p>
                {user.isNewUser ? (
                    <input type="submit" value="Create" className="submit-button btn"/>
                ) : (
                    <input type="submit" value="Log In" className="submit-button btn"/>
                )}
            </form>
        </div>
        </section>
    );
};


export default Login;
