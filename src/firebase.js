import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABE4PFreV5CZjMjGUQwNJ_gdf6ie35ySM",
  authDomain: "clone-76337.firebaseapp.com",
  databaseURL: "https://clone-76337.firebaseio.com",
  projectId: "clone-76337",
  storageBucket: "clone-76337.appspot.com",
  messagingSenderId: "280891903201",
  appId: "1:280891903201:web:ad967c40ce1414f8203ba0",
  measurementId: "G-M7GM2TY73P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
