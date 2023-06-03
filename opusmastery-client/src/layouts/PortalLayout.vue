<template>
    <q-layout view="lHh Lpr lFf">
        <PortalHeader />

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<!--<q-header elevated>-->
<!--<q-toolbar>-->
<!--    <q-btn-->
<!--        flat-->
<!--        dense-->
<!--        round-->
<!--        icon="menu"-->
<!--        aria-label="Menu"-->
<!--        @click="toggleLeftDrawer"-->
<!--    />-->

<!--    <q-toolbar-title>-->
<!--        Quasar App-->
<!--    </q-toolbar-title>-->

<!--    <div>Quasar v{{ $q.version }}</div>-->
<!--</q-toolbar>-->
<!--</q-header>-->

<!--<q-drawer-->
<!--    v-model="leftDrawerOpen"-->
<!--    show-if-above-->
<!--    bordered-->
<!--&gt;-->
<!--<q-list>-->
<!--    <q-item-label-->
<!--        header-->
<!--    >-->
<!--        Essential Links-->
<!--    </q-item-label>-->

<!--    <EssentialLink-->
<!--        v-for="link in essentialLinks"-->
<!--        :key="link.title"-->
<!--        v-bind="link"-->
<!--    />-->
<!--</q-list>-->
<!--</q-drawer>-->

<script setup lang="ts">
import PortalHeader from 'components/portal/PortalHeader.vue';
</script>
