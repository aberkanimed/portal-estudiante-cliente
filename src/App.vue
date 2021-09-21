<template>
  <router-view/>
</template>

<script>
export default {
  created() {
      if(localStorage.getItem('user') && localStorage.getItem('token')) {
          const data = {
              usuario: JSON.parse(localStorage.getItem('user')),
              token: JSON.parse(localStorage.getItem('token'))
          }
          if (data) {
              this.$store.commit('SET_USER_DATA', data)
          }
      }
    }
  }
</script>
