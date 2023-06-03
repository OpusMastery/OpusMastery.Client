<template>
    <q-layout>
        <PortalHeader />

        <q-page-container class="colored-container">
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import PortalHeader from 'components/portal/PortalHeader.vue';
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.scss'

.colored-container
    background: linear-gradient(to bottom, $primary 0%, $primary 40%, $creamy 40%, $creamy 100%)
</style>
