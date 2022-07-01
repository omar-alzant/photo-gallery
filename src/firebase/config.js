import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9pZnLVjhDYr-lZTNsPRgmmCDBxK6RNO4",
  authDomain: "photogalleryreact-f0ca8.firebaseapp.com",
  projectId: "photogalleryreact-f0ca8",
  storageBucket: "photogalleryreact-f0ca8.appspot.com",
  messagingSenderId: "905202240106",
  appId: "1:905202240106:web:6b91aaa68554dded7d9813"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };