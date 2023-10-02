import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsM-g_ElDcdjsOFUlJh4JYQM8O4-ZtHOM",
  authDomain: "my-portfolio-e9073.firebaseapp.com",
  projectId: "my-portfolio-e9073",
  storageBucket: "my-portfolio-e9073.appspot.com",
  messagingSenderId: "477765236540",
  appId: "1:477765236540:web:792e10dd6fb90e8c379039",
  measurementId: "G-4ECFC1L7N9"
};


 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
