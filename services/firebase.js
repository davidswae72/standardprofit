import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyAHpKyXhNDYm8IlBBb9Xgz1eVjFJztlCsY",
  authDomain: "cashtagforex.firebaseapp.com",
  projectId: "cashtagforex",
  storageBucket: "cashtagforex.appspot.com",
  messagingSenderId: "521050562434",
  appId: "1:521050562434:web:c9f44f55e905c85451f99b"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export const auth = firebase.auth()
export const db = firebase.firestore()
export const st = firebase.storage()
