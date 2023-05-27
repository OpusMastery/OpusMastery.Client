<template>
    <div class="login">
        <div class="text-h3">
            Login into The Hub <q-badge align="middle">v1.1.000</q-badge>
        </div>
        <form @submit.prevent="submitLoginForm">
            <div>
                <label>Email:</label>
                <input id="email" v-model="email" type="email" required>
            </div>
            <div>
                <label>Password:</label>
                <input id="password" v-model="password" type="password" required>
            </div>
            <button type="submit">
                Login
            </button>
        </form>
    </div>
    <EmployeeCard
        full-name="Rostyslav Nakarlovich"
        position="Software Engineer"
        status="Active"
        email="example@gmail.com"
        phone="(209) 501-0109"
        department-name="R&D"
        date-of-joining="2022-07-21"
    />
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { loginWithPassword } from 'src/api/identity';
import EmployeeCard from 'components/employee/EmployeeCard.vue';

const email = ref('');
const password = ref('');

onMounted(() => {
    console.log(email);
});

onBeforeMount(() => {
    console.log(email);
});

const submitLoginForm = async () => {
    console.log(`Email: ${email.value}, Password: ${password.value}`);

    await loginWithPassword({
        email: email.value,
        password: password.value
    });
}
</script>

<style lang="sass" scoped>
.login
    text-align: center

.login form
    display: flex
    flex-direction: column
    gap: 10px
    align-items: center
</style>
