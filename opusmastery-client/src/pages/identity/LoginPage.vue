<template>
    <div class="login-form">
        <div>
            <img
                src="images/logo-black-horizontal-small.svg"
                alt="OpusMastery big logo"
                class="login-logo"
            >
            <div class="text-h4">
                Login into Employee Portal
            </div>
            <BaseInput
                v-model="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
            />
            <BaseInput
                v-model="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
            />
            <BaseButton
                @callback="submitLoginForm"
                text="Login"
                font-size="large"
                accent="primary"
                class="login-button"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useIdentityStore } from 'stores/identity/identityStore';
import BaseInput from 'components/base/BaseInput.vue';
import BaseButton from 'components/base/BaseButton.vue';

const store = useIdentityStore();

const email = ref('');
const password = ref('');

const submitLoginForm = async () => {
    await store.authenticateUser({ email: email.value, password: password.value });
};
</script>

<style lang="sass" scoped>
.login-form
    height: 80vh
    width: 100%
    display: flex
    justify-content: center
    align-items: center

.login-form > div
    width: 100%
    max-width: 672px
    display: flex
    flex-flow: column wrap
    align-items: center
    row-gap: 24px

.login-logo
    margin-bottom: 36px

.login-button
    margin-top: 12px
</style>
