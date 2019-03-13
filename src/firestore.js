import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDD3bqrKvHjlBeLt3_xqfK1IkWWgF7CHcU',
  authDomain: 'vue-auth2368.firebaseapp.com',
  databaseURL: 'https://vue-auth2368.firebaseio.com',
  projectId: 'vue-auth2368',
  storageBucket: 'vue-auth2368.appspot.com',
  messagingSenderId: '29527813748'
}

const myFirebase = firebase.initializeApp(config)
const db = myFirebase.firestore()

export default db
