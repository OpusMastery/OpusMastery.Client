<template>
    <div>
        <q-card flat class="absence-card">
            <q-avatar size="48px">
                <img :src="props.icon" alt="Employee avatar">
            </q-avatar>
            <q-card-section class="card-entry absence-card-content">
                <div>
                    <div class="text-subtitle1 text-bold">{{ props.fullName }}</div>
                    <div class="text-subtitle2 text-medium text-grey-7">{{ props.position }}</div>
                </div>
                <div class="absence-card-statuses">
                    <BaseStateLabel
                        class="text-bold"
                        :title="applicationStatus"
                        color="teal"
                    />
                    <BaseStateLabel
                        class="text-bold"
                        :title="date.formatDate(props.startingDate, 'DD MMM') + ' to ' + date.formatDate(props.endingDate, 'DD MMM')"
                        color="purple"
                    />
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup lang="ts">
import { date } from 'quasar'
import BaseStateLabel from 'components/base/BaseStateLabel.vue';

const props = defineProps({
    fullName: { type: String, required: true },
    position: { type: String, required: true },
    applicationStatus: { type: String, required: true },
    startingDate: { type: String, required: true },
    endingDate: { type: String, required: true },
    icon: { type: String, required: true },
});
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.scss'

.absence-card
    padding: 6px
    background-color: $creamy
    border-radius: 20px
    display: flex
    flex-flow: row nowrap
    align-items: center

.card-entry
    padding: 6px

.absence-card-content
    width: 100%
    margin: 0 14px
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center

.absence-card-statuses
    display: flex
    flex-flow: row nowrap
    column-gap: 12px
</style>
