<template>
    <v-container>
        <h2>Zmena jazyka</h2>
        <div>
            <v-select
            v-model="$i18n.locale"
            :items="langs"
            filled
            label="Vyberte jazyk"
            ></v-select>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: 'SelectLocale',
        data() {
            return { langs: ['sk', 'en'] }
        }
    }
</script>

<style lang="scss" scoped>

</style>