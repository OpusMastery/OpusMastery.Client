<template>
    <q-header class="header-bottom-border">
        <q-toolbar class="main-toolbar">
            <div class="main-toolbar-container">
                <img
                    @click="goToPortalPage('EmployeesPage')"
                    class="cursor-pointer"
                    src="images/logo-colored-horizontal-small.svg"
                    alt="OpusMastery logo"
                >
                <div class="main-toolbar-tabs">
                    <BaseHeaderButton
                        v-for="page in portalPages"
                        :key="page.name"
                        @click="goToPortalPage(page.name)"
                        :text="page.title"
                        :icon="page.icon"
                        :class="getClassNameIfActive(page.name)"
                    />
                </div>
            </div>
        </q-toolbar>
    </q-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { laShapesSolid, laUsersSolid, laCalendarCheckSolid } from '@quasar/extras/line-awesome';
import BaseHeaderButton from 'components/base/BaseHeaderButton.vue';

const router = useRouter();

const portalPages = [
    {
        name: 'DashboardPage',
        title: 'Dashboard',
        icon: laShapesSolid,
    },
    {
        name: 'EmployeesPage',
        title: 'Employees',
        icon: laUsersSolid,
    },
    {
        name: 'AbsencePage',
        title: 'Leaves',
        icon: laCalendarCheckSolid,
    },
];

const getClassNameIfActive = (pageName: string): string => {
    return isCurrentPage(pageName) ? 'header-button-activated no-pointer-events' : '';
};

const isCurrentPage = (pageName: string): boolean => {
    return router.currentRoute.value.name === pageName;
};

const goToPortalPage = (pageName: string) => {
    router.push({ name: pageName })
};
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.scss'

.header-bottom-border
    border-bottom: 2px solid $primary-faded

.main-toolbar
    padding: 28px 0
    display: flex
    justify-content: center

.main-toolbar-container
    width: 95vw
    display: flex
    align-items: center

.main-toolbar-tabs
    margin-left: 5vw
    display: flex
    flex-flow: row wrap
    column-gap: 8px

.header-button-activated
    color: $background
    background-color: $primary-faded
</style>
