<template>
    <q-layout>
        <LandingHeader />

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import LandingHeader from 'components/landing/LandingHeader.vue';

</script>

<style lang="sass" scoped>

</style>
