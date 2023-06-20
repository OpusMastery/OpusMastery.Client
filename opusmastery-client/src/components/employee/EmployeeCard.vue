<template>
    <q-card class="employee-card">
        <q-card-section class="card-entry">
            <div class="employee-general-info">
                <q-avatar size="76px">
                    <img :src="props.icon" alt="Employee avatar">
                </q-avatar>
                <div class="text-h6 text-bold">{{ props.fullName }}</div>
                <div class="text-subtitle2 text-medium text-grey-7">{{ props.position }}</div>
                <BaseStateLabel
                    class="employee-status-label text-bold"
                    :title="capitalizedStatus"
                    :color="statusColor"
                />
            </div>
        </q-card-section>
        <q-card-section class="card-entry">
            <div class="employee-contact-info text-subtitle1 text-medium">
                <div>
                    <q-icon :name="matMailOutline" />
                    <div>{{ props.email }}</div>
                </div>
                <div>
                    <q-icon :name="matPhoneIphone" />
                    <div>{{ props.phone }}</div>
                </div>
            </div>
        </q-card-section>
        <q-card-section class="card-entry">
            <div class="employee-work-info text-subtitle1">
                <div>
                    <div>Department</div>
                    <div class="text-medium">{{ props.departmentName }}</div>
                </div>
                <div>
                    <div>Date of joining</div>
                    <div class="text-medium">{{ formatDate(new Date(props.dateOfJoining), 'MM-DD-YYYY') }}</div>
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
    'Inactive': '#c4975bff',
};

const props = defineProps({
    fullName: { type: String, required: true },
    position: { type: String, required: true },
    status: { type: String, required: true, validator: (value: string) => ['Active', 'Inactive'].includes(value) },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    departmentName: { type: String, required: true },
    dateOfJoining: { type: String, required: true },
    icon: { type: String, required: true },
});

const capitalizedStatus = computed(() => {
    return props.status?.toUpperCase() ?? '';
});
const statusColor = computed(() => {
    return labelColors[props.status];
});
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.scss'

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
    flex-flow: column wrap
    align-items: center
    row-gap: 4px

.employee-status-label
    margin-top: 6px

.employee-contact-info
    padding: 10px 16px
    border-radius: 20px
    background-color: $creamy
    text-align: left

.employee-contact-info > div
    margin: 4px 0
    display: flex
    align-items: center
    column-gap: 12px

.employee-work-info
    padding: 10px 16px
    border-radius: 20px
    background-color: $purple

.employee-work-info > div
    margin: 4px 0
    display: flex
    justify-content: space-between
</style>
