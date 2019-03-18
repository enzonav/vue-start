<template>
  <header>
    <div class="logo">
      <router-link to="/" class="Logo">Client</router-link>
    </div>
    <div class="main-navigation">
      <router-link to="/about">About</router-link>
      <router-link to="/contacts">Contacts</router-link>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>
