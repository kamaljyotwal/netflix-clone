import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCxxg6S3eXlI4bgOo6GsR2QVIUlRMqi7fY",
  authDomain: "netflix-27103.firebaseapp.com",
  projectId: "netflix-27103",
  storageBucket: "netflix-27103.appspot.com",
  messagingSenderId: "702654188116",
  appId: "1:702654188116:web:89229e45ccb72c2fcd3bc1",
};

const firebaseConst = Firebase.initializeApp(firebaseConfig);

export { firebaseConst };
