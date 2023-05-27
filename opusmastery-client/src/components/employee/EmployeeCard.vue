<template>
    <q-card class="employee-card">
        <q-card-section class="card-entry">
            <div class="employee-general-info">
                <q-avatar size="76px">
                    <img src="https://cdn.quasar.dev/img/avatar.png" alt="Employee avatar">
                </q-avatar>
                <div class="text-h6 text-bold">{{ props.fullName }}</div>
                <div class="text-subtitle2 text-grey-7 text-medium">{{ props.position }}</div>
                <BaseStateLabel
                    class="employee-status-label text-bold"
                    :title="upperCaseStatus"
                    :color="statusColor"
                />
            </div>
        </q-card-section>
        <q-card-section class="card-entry">
            <div class="employee-contact-info">
                <div class="text-subtitle1 text-black"> <q-icon :name="matMailOutline" /> &nbsp;{{ props.email }}</div>
                <div class="text-subtitle1 text-black"> <q-icon :name="matPhoneIphone" /> &nbsp;{{ props.phone }}</div>
            </div>
        </q-card-section>
        <q-card-section class="card-entry">
            <div class="employee-work-info">
                <div>
                    <div class="text-subtitle1 text-black">Department</div>
                    <div class="text-subtitle1 text-black text-medium">{{ props.departmentName }}</div>
                </div>
                <div>
                    <div class="text-subtitle1 text-black">Date of joining</div>
                    <div class="text-subtitle1 text-black text-medium">{{ formatDate(new Date(props.dateOfJoining), 'MM-DD-YYYY') }}</div>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { matMailOutline, matPhoneIphone } from '@quasar/extras/material-icons';
import { formatDate } from 'src/utils/date/dateParser';
import BaseStateLabel from 'components/base/BaseStateLabel.vue';

const labelColors: Record<string, string> = {
    'Active': '#1d322fe6',
    'Inactive': '#c4975bff'
};

const props = defineProps<{
    fullName: string,
    position: string,
    status: string,
    email: string,
    phone: string,
    departmentName: string,
    dateOfJoining: string
}>();

const upperCaseStatus = computed(() => {
    return props.status.toUpperCase();
})
const statusColor = computed(() => {
    return labelColors[props.status];
});
</script>

<style lang="sass" scoped>
.employee-card
    width: 100%
    max-width: 328px
    border-radius: 20px

.card-entry
    padding: 0 10px 10px

.employee-general-info
    min-height: 228px
    padding: 28px 0 0
    display: flex
    flex-direction: column
    row-gap: 4px
    align-items: center

.employee-status-label
    margin-top: 6px

.employee-contact-info
    padding: 10px 16px
    border-radius: 20px
    background-color: rgb(196, 151, 91, .2)
    text-align: left

.employee-contact-info > div
    margin: 4px 0

.employee-work-info
    padding: 10px 16px
    border-radius: 20px
    background-color: rgba(191, 167, 249, .2)

.employee-work-info > div
    margin: 4px 0
    display: flex
    justify-content: space-between
</style>
