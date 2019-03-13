<template>
  <div class="wrapper">
    <h2>Login Page</h2>
    <form @submit.prevent="login">
      <input type="email" placeholder="Email" v-model="email" /><br>
        <input type="password" placeholder="Password" v-model="password" /><br>
        <button>Login</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    login () {
      console.log('Loggin in')
    }
  }
}
</script>

<style ></style>
