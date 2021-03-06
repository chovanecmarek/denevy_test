<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >

      <v-container class="py-0 fill-height">

        <v-row>
          <v-col>
            <div>{{ $t('message.hello') }}</div>
          </v-col>
        </v-row>
        
      </v-container>

    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <Nav/>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view/>
            </v-sheet>
          </v-col>

        </v-row>
      </v-container>
    </v-main>

    <v-footer padless>
        <Footer/>
    </v-footer>

  </v-app>
</template>

<script>
  import Nav from "./components/Nav";
  import Footer from "./components/Footer";

  export default {
    data () {
      return {
      }
    },
    components: {
      Nav,
      Footer,
    }
  }
</script>