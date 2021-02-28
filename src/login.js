import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import { firebase } from "@firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const firebaseApp2 = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

class Login extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div>
        {user ? (
          <p>Hello, {user.displayName}</p>
        ) : (
          <p>Would you like to help?</p>
        )}

        {user ? (
          <button onClick={signOut}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp2.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
