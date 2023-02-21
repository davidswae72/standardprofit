import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyC2fNTNKbNtioqGu-nF6RVagk7YBGBCMDY",
  authDomain: "standardprofit-bcc45.firebaseapp.com",
  projectId: "standardprofit-bcc45",
  storageBucket: "standardprofit-bcc45.appspot.com",
  messagingSenderId: "439896916335",
  appId: "1:439896916335:web:0edd0a02d4003370ffa89a"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export const auth = firebase.auth()
export const db = firebase.firestore()
export const st = firebase.storage()
