<template>
    <div class="employees-page">
        <div class="employees-page-container">
            <div class="employees-header">
                <div class="text-h3 text-white">Employees</div>
                <BaseButton
                    text="Add new employee"
                    :icon="laUserPlusSolid"
                    accent="secondary"
                    class="text-bold"
                    style="max-width: fit-content"
                    @click="prompt = true"
                />
            </div>
            <div class="employee-cards">
                <EmployeeCard
                    v-for="employee in employees"
                    :key="employee.email"
                    :full-name="employee.firstName + ' ' + employee.lastName"
                    :position="employee.position"
                    :status="employee.status"
                    :email="employee.email"
                    :phone="employee.phone"
                    :department-name="employee.departmentName"
                    :date-of-joining="employee.joiningDate"
                    icon="https://cdn3.iconfinder.com/data/icons/avatars-neutral/48/bl_816_avatar_race_neutral_man_empty_woman_male_female-512.png"
                />
            </div>
        </div>
    </div>
    <q-dialog v-model="prompt" persistent>
        <q-card>
            <q-card-section>
                <div class="text-h6">New Employee</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-card-section horizontal>
                    <q-card-section>
                        <BaseInput
                            autofocus
                            v-model="email"
                            type="email"
                            label="Email"
                            placeholder="Enter employee email"
                        />
                    </q-card-section>
                    <q-space />
                    <q-card-section>
                        <BaseInput
                            v-model="phone"
                            type="phone"
                            label="Phone"
                            placeholder="Employee phone"
                        />
                    </q-card-section>
                </q-card-section>
                <q-card-section horizontal>
                    <q-card-section>
                        <BaseInput
                            v-model="firstName"
                            type="text"
                            label="First name"
                            placeholder="Employee first name"
                        />
                    </q-card-section>
                    <q-space />
                    <q-card-section>
                        <BaseInput
                            v-model="lastName"
                            type="text"
                            label="Last name"
                            placeholder="Employee last name"
                        />
                    </q-card-section>
                </q-card-section>
                <q-card-section>
                    <BaseInput
                        v-model="position"
                        type="text"
                        label="Position"
                        placeholder="Employee position"
                    />
                </q-card-section>
                <q-card-section>
                    <BaseInput
                        v-model="joiningDate"
                        type="text"
                        label="Joining date"
                        placeholder="Employee joining date"
                    />
                </q-card-section>
                <q-card-section>
                    <BaseInput
                        v-model="departmentName"
                        type="text"
                        label="Department name"
                        placeholder="Employee department name"
                    />
                </q-card-section>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Add new" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AxiosRequestConfig from 'axios';
import { laUserPlusSolid } from '@quasar/extras/line-awesome';
import { apiInstance } from 'boot/axios';
import EmployeeCard from 'components/employee/EmployeeCard.vue';
import BaseButton from 'components/base/BaseButton.vue';
import BaseInput from 'components/base/BaseInput.vue';
import { useEmployeeStore } from 'stores/employee/employeeStore';

const store = useEmployeeStore();

const isLoading = ref(false)
const employees = ref([])
const prompt = ref(false)

const fetchEmployees = async () => {
    isLoading.value = true

    try {
        const requestConfig: AxiosRequestConfig = {
            headers: {
                'CompanyId': await store.getCompanyId()
            }
        };

        const response = await apiInstance.get('https://opusmastery.org/api/v1/employees', requestConfig);
        employees.value = response.data;
    } catch (error) {
        console.error(error)
    } finally {
        isLoading.value = false
    }
};

onMounted(async () => {
    await fetchEmployees()
});
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.scss'
.employees-page
    display: flex
    justify-content: center

.employees-page-container
    width: 95vw
    padding: 28px 0
    display: flex
    flex-flow: column wrap
    row-gap: 4vw

.employees-header
    display: flex
    justify-content: space-between

.employee-cards
    display: flex
    flex-flow: row wrap
    align-items: start
    justify-content: center
    gap: 2vw

.dashboard-button-activated
    color: $background
    background-color: $primary-faded
</style>
