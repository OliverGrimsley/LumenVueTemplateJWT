<template>
<div>Logout screen</div>
</template>

<script>
    import { store } from './../store/apistore'
    export default {
      created () {
        console.log('Component logout mounted')
        localStorage.removeItem('token')
        store.commit('logoutUser')
        this.$router.push({ name: 'login' })
      }
    }
</script>