<template>
    <q-layout>
        <PortalHeader />

        <q-page-container class="colored-container">
            <q-page>
                <router-view />
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import PortalHeader from 'components/dashboard/DashboardHeader.vue';
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.scss'

.colored-container
    background: linear-gradient(to bottom, $primary 0%, $primary 20vw, $creamy 20vw, $creamy 100%)
</style>
