<template>
    <div>
        <router-link
            v-for="link in links"
            :key="link.id"
            :to="link.url"
        >
            {{ link.title }}
            
        </router-link>
        
    </div>
</template>

<script>
    export default {
    data () {
      return {
        links: [
          { id: 1, title: 'Dashboard', url: '/' },
          { id: 2, title: 'About', url: '/about' },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

    a{
        margin-left: 1em;
        font-weight: 500;
        text-decoration: none;
        
    }


</style>