import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAFajKIi8t3xgdZm2OCMmIsU50PqcRRWWM",
    authDomain: "studentmanagement-8068f.firebaseapp.com",
    databaseURL: "https://studentmanagement-8068f-default-rtdb.firebaseio.com",
    projectId: "studentmanagement-8068f",
    storageBucket: "studentmanagement-8068f.appspot.com",
    messagingSenderId: "69783163011",
    appId: "1:69783163011:web:8299471a14e69c5bce0bb6",
    measurementId: "G-ZEKE1L6PH5"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  export { app, analytics }; 