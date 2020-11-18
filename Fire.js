import Firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyBM7GYlYyZE6Fv76wLo8qLh4O7C9c3nqoA",
  authDomain: "loginsignup-9f083.firebaseapp.com",
  databaseURL: "https://loginsignup-9f083.firebaseio.com",
  projectId: "loginsignup-9f083",
  storageBucket: "loginsignup-9f083.appspot.com",
  messagingSenderId: "493819467490",
  appId: "1:493819467490:web:3f1f483a10bee6188030bb",
  measurementId: "G-3G1C8LGXQF"
};
// Initialize Firebase
const Fire = Firebase.initializeApp(firebaseConfig);
export default Fire;
