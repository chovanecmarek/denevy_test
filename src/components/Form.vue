<template>
    <v-container>
        <h2>Formulár</h2>
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Meno"
            required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="mobile"
            :rules="mobileRules"
            label="Telefónne číslo"
            required
            ></v-text-field>

            <v-checkbox
            v-model="checkbox"
            :rules="checkboxRules"
            label="Súhlasím so spracovaním mojích osobných údajov."
            required
            ></v-checkbox>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="sendForm"
            >
            Odoslať
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            >
            Zrušiť
            </v-btn>

        </v-form>
    </v-container>
</template>

<script>
  const axios = require('axios');

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Meno je povinné',
        v => (v && v.length <= 10) || 'Meno musí mať menej ako 10 znakov',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail je povinný',
        v => /.+@.+\..+/.test(v) || 'E-mail je v nesprávnom tvare',
      ],
      mobile: '',
      mobileRules: [
        v => !!v || 'Telefónne číslo je povinne',
        v => /^\d+$/.test(v) || 'Telefón je v nesprávnom tvare',
      ],
      checkbox: false,
      checkboxRules: [
        v => !!v || 'Súhlas je povinný!',
      ],
    }),

    methods: {
      sendForm () {

        let data = {
            name: this.name,
            email: this.email,
            mobile: this.mobile,
            checkbox: this.checkbox,
        }

        if (this.$refs.form.validate()) {
          axios.post('/user', data)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }

      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>