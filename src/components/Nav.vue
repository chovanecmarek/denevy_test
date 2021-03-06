<template>
    <v-navigation-drawer permanent>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="link in links"
          :key="link.id"
        >
          <v-list-item-content>
            <router-link :to="link.url">{{ link.title }}</router-link>
          </v-list-item-content>

        </v-list-item>

      </v-list>
      
    </v-navigation-drawer>
</template>

<script>
    export default {
    data () {
      return {
        links: [
          { id: 1, title: 'Dashboard', url: '/' },
          { id: 2, title: 'Jazyk', url: '/language' },
          { id: 3, title: 'O nás', url: '/about' },
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