import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyChGxf4mfCEUZ3MxnWoRPtOP-Fzsl-Oeic",
    authDomain: "shop-99dad.firebaseapp.com",
    databaseURL: "https://shop-99dad.firebaseio.com",
    projectId: "shop-99dad",
    storageBucket: "shop-99dad.appspot.com",
    messagingSenderId: "669594019231"
  }

  export const firebaseApp = firebase.initializeApp(config)
  export const fireData = firebase.database()
