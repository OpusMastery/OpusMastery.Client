<template>
    <div class="login">
        <div class="text-h3">
            Login into The Employee Hub <q-badge align="top">v1.1.000</q-badge>
        </div>
        <form @submit.prevent="submitLoginForm()">
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIdentityStore } from 'stores/identity/identityStore';

const identityStore = useIdentityStore();

const email = ref('');
const password = ref('');

const submitLoginForm = async () => {
    await identityStore.authenticateUser({ email: email.value, password: password.value });
}
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
