import { initializeApp } from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBsbZP3YcEREfDpTEaFu00XADawlnP4BOU",
    authDomain: "robotrix-e28d8.firebaseapp.com",
    projectId: "robotrix-e28d8",
    storageBucket: "robotrix-e28d8.appspot.com",
    messagingSenderId: "588719945136",
    appId: "1:588719945136:web:fccfdecece9f146da09275",
    measurementId: "G-D8VZNE8NKC"
};

const app = initializeApp(firebaseConfig);
export default app