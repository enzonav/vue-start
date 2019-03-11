<template>
  <div class="wrapper">
    <h2>Register Page</h2>
    <form>
      <input type="text" placeholder="Firstname" v-model="userData.firstname" /><br>
      <input type="text" placeholder="Lastname" v-model="userData.lastname" /><br>
      <input type="text" placeholder="Username" v-model="userData.username" /><br>
      <input type="email" placeholder="Email" v-model="userData.email" /><br>
      <input type="password" placeholder="Choose a password" v-model="userData.password" /><br>
      <button>Create account</button>
    </form>
  </div>
</template>

<script>

export default {

  name: 'Register',
  data () {
    return {
      userData: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser () {
      firebase.auth().createUserWithEmailAndPassword(this.userData.email, this.userData.password)
        .then(user => {
          console.log(user)
        })
        .catch(err => {
          this.errorMessage = err.Message
        })
    }
  }
}
</script>
<style ></style>
