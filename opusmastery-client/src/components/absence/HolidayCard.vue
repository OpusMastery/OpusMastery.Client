<template>
    <q-card class="holiday-card">
        <q-card-section class="card-entry">
            <div class="holiday-card-date text-subtitle2 text-bold">
                <div>{{ date.formatDate(props.dateOnly, 'DD MMM') }}</div>
            </div>
        </q-card-section>

        <q-card-section class="card-entry">
            <div class="holiday-card-name text-subtitle2 text-medium">
                <div>{{ props.globalName }}</div>
                <div class="text-bold">{{ props.localName }}</div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import { date } from 'quasar'

const props = defineProps({
    globalName: { type: String, required: true },
    localName: { type: String, required: true },
    dateOnly: { type: String, required: true },
});
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.scss'

.holiday-card
    border-radius: 20px
    display: flex
    flex-flow: row nowrap
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

.card-entry
    padding: 6px

.holiday-card-name
    padding: 8px
    border-radius: 20px

.holiday-card-date
    width: 76px
    height: 100%
    padding: 10px
    border-radius: 20px
    background-color: $purple
    text-align: center
</style>
