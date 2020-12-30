
//Imports
import firebase from "firebase/app";
import "firebase/firestore";


//Componente
const app = firebase.initializeApp(

  
//Datos del Firebase
  {
    apiKey: "AIzaSyAVuHtInP_7s68i2Ho3FaGaalN64OwrjSI",
    authDomain: "ecommerce-react-jmf.firebaseapp.com",
    projectId: "ecommerce-react-jmf",
    storageBucket: "ecommerce-react-jmf.appspot.com",
    messagingSenderId: "691686983826",
    appId: "1:691686983826:web:2022c992708e1e2fe2be4b"
  }
);


//Exportar por default
export const getFirebase = () => {
  return app;
};


//Exportar por default
export const getFirestore = () => {
  return firebase.firestore(app);
};

