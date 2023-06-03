<template>
    <q-layout>
        <LandingHeader />

        <q-page-container class="colored-container">
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import LandingHeader from 'components/landing/LandingHeader.vue';

</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.scss'

.colored-container
    background: linear-gradient(to bottom, $background 0%, $creamy 100%)
</style>
