<template>
    <div class="absence-page">
        <div class="absence-page-container">
            <div class="absence-header">
                <div class="text-h3 text-white">Absence</div>
                <BaseButton
                    text="Add new application"
                    :icon="laCalendarPlusSolid"
                    accent="secondary"
                    class="text-bold"
                    style="max-width: fit-content"
                />
            </div>
            <div class="absence-content">
                <q-card class="holiday-cards">
                    <div class="text-h4" style="margin-bottom: 16px">Upcoming holidays</div>
                    <div class="text-subtitle1 text-grey-7" v-if="isLoading">Loading..</div>
                    <HolidayCard
                        v-for="holiday in holidays"
                        :key="holiday.globalName"
                        :global-name="holiday.globalName"
                        :local-name="holiday.localName"
                        :date-only="holiday.date"
                        class="holiday-item"
                    />
                </q-card>
                <div class="absence-calendar">
                    <q-calendar-month
                        :weekdays="[1,2,3,4,5,6,0]"
                        day-min-height="52"
                        animated
                        bordered
                        hoverable
                        no-active-date
                        style="border-radius: 20px;"
                    />
                    <q-card class="leaves">
                        <div class="text-h4" style="margin-bottom: 16px">Absence calendar</div>
                        <div class="text-subtitle1 text-grey-7" v-if="isLoading">Loading..</div>
                        <AbsenceCalendar
                            full-name="Rostyslav Nakarlovich"
                            position="Software Engineer"
                            application-status="Approved"
                            starting-date="2023-06-22"
                            ending-date="2023-06-23"
                            icon="https://cdn3.iconfinder.com/data/icons/avatars-neutral/48/bl_816_avatar_race_neutral_man_empty_woman_male_female-512.png"
                        />
                    </q-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { apiInstance } from 'boot/axios';
import { QCalendarMonth } from '@quasar/quasar-ui-qcalendar/src/index.js'
import { laCalendarPlusSolid } from '@quasar/extras/line-awesome';
import BaseButton from 'components/base/BaseButton.vue';
import HolidayCard from 'components/absence/HolidayCard.vue';
import AbsenceCalendar from 'components/absence/AbsenceCalendar.vue';

const isLoading = ref(false)
const holidays = ref([])

const fetchHolidays = async () => {
    isLoading.value = true

    try {
        const holidayFilter = { 'timezone': Intl.DateTimeFormat().resolvedOptions().timeZone };
        const response = await apiInstance.post('https://opusmastery.org/api/v1/leaves/holidays', holidayFilter);
        holidays.value = response.data;
    } catch (error) {
        console.error(error)
    } finally {
        isLoading.value = false
    }
};

onMounted(async () => {
    await fetchHolidays()
});
</script>

<style lang="sass" scoped>
.absence-page
    display: flex
    justify-content: center

.absence-page-container
    width: 95vw
    padding: 28px 0
    display: flex
    flex-flow: column wrap
    row-gap: 4vw

.absence-header
    display: flex
    justify-content: space-between

.absence-content
    display: flex
    flex-flow: row nowrap
    align-items: start
    column-gap: 10px

.holiday-cards
    width: 100%
    max-width: 328px
    padding: 18px
    border-radius: 20px

.absence-calendar
    width: 100%
    display: flex
    flex-flow: column nowrap

.leaves
    padding: 18px
    margin-top: 10px
    border-radius: 20px
</style>
