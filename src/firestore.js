import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'xxxxxxxxxxxxxx',
  authDomain: 'xxxxxxxxxxxxxx',
  databaseURL: 'xxxxxxxxxxxxxx',
  projectId: 'xxxxxxxxxxxxxxt',
  storageBucket: 'xxxxxxxxxxxxxx',
  messagingSenderId: 'xxxxxxxxxxxxxx'
}

const firestore = firebase.initializeApp(config)
const db = firebase.firestore()

export default db
