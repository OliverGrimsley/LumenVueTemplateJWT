<template>
    <div>

        Inside dashboard
        {{info.name}}

    </div>
</template>

<script>

export default {
  created: function () {
    if (localStorage.getItem('token')) {
        const $token = localStorage.getItem('token')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + $token
        axios.post('/me').then(
            res => {
                this.info = res.data
            },
            error => {
                this.$router.push({ name: 'logout' })        
            }
        )
        console.log(this.info)
    } else {
        this.$router.push({ name: 'login' })
    }
    
  },
  data: function () {
    return {
      info: {}
    }
  }
}




</script>