import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7Qs4SXX75sovHmJxsX3aZh06XzzhISXs",
    authDomain: "lesswaste-dd951.firebaseapp.com",
    databaseURL: "https://lesswaste-dd951.firebaseio.com",
    projectId: "lesswaste-dd951",
    storageBucket: "lesswaste-dd951.appspot.com",
    messagingSenderId: "67906557144",
    appId: "1:67906557144:web:d2f49577630f9e3f5bb3ad",
    measurementId: "G-PT8D3R3NBE"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
    }

    // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}
   
  export default Firebase;
  