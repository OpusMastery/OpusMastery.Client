<template>
    <div class="login">
        <div class="text-h3">
            Login into The Employee Hub <q-badge align="top">v1.1.000</q-badge>
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
import { useIdentityStore } from 'stores/indentity/identityStore';
import EmployeeCard from 'components/employee/EmployeeCard.vue';

const identityStore = useIdentityStore();

const email = ref('');
const password = ref('');

onBeforeMount(() => {
    console.log(email);
});

onMounted(() => {
    console.log(email);
});

async function submitLoginForm() {
    const email1 = email.value;
    const password1 = password.value;
    const object = { email1, password1 }

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    await identityStore.authenticateUser(object)
}

// const submitLoginForm = async () => {
//     const email = this.email.value;
//     const password = this.password.value;
//     const object = { email, password }
//
//     console.log(`Email: ${email.value}, Password: ${password.value}`);
//     await identityStore.authenticate(object)
// }
</script>

<style lang="sass" scoped>
.login
    margin-top: 200px
    text-align: center

.login form
    display: flex
    flex-direction: column
    gap: 10px
    align-items: center
</style>
