<template>
    <div class="q-pa-md">
        <BaseInput
            v-model="inputs.email.value"
            type="email"
            label="Email"
            placeholder="Enter your email"
            :has-error="errorFlags.email.value"
            :error-message="errorMessages.email.value"
        />
        <BaseInput
            v-model="inputs.password.value"
            type="password"
            label="Password"
            placeholder="Think of secure password"
            hint="Must be between 8 and 64 characters"
            :has-error="errorFlags.password.value"
            :error-message="errorMessages.password.value"
        />
        <BaseInput
            v-model="inputs.passwordConfirmation.value"
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            :has-error="errorFlags.passwordConfirmation.value"
            :error-message="errorMessages.passwordConfirmation.value"
        />
        <BaseInput
            v-model="inputs.firstName.value"
            type="text"
            label="First Name"
            placeholder="Enter your first name"
        />
        <BaseInput
            v-model="inputs.lastName.value"
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
        />
        <BaseButton
            @callback="register"
            text="Register"
            font-size="large"
            accent="primary"
            :disabled="!hasCorrectInputs"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { watchDebounced } from '@vueuse/core';
import BaseButton from 'components/base/BaseButton.vue';
import BaseInput from 'components/base/BaseInput.vue';
import { useIdentityStore } from 'stores/identity/identityStore';
import { checkWithRegex } from 'src/utils/validation/regexValidator';

const store = useIdentityStore();

const inputs = {
    email: ref(''),
    password: ref(''),
    passwordConfirmation: ref(''),
    firstName: ref(''),
    lastName: ref(''),
};
const errorFlags = {
    email: ref(false),
    password: ref(false),
    passwordConfirmation: ref(false),
};
const errorMessages = {
    email: ref(''),
    password: ref(''),
    passwordConfirmation: ref(''),
};
const validInputs = {
    email: ref(false),
    password: ref(false),
};

const hasCorrectInputs = computed(() => {
    return validInputs.email.value && validInputs.password.value;
});

const register = () => {
    console.log({ email: inputs.email, password: inputs.password })
    console.log('Registration button clicked');
};

watchDebounced(
    inputs.email,
    async () => {
        validInputs.email.value = false;
        errorFlags.email.value = !checkWithRegex('email', inputs.email.value);
        if (errorFlags.email.value) {
            errorMessages.email.value = 'Please write your email in correct format';
        } else {
            await checkUserStatus(inputs.email.value);
        }
    },
    { debounce: 250, maxWait: 600 },
);

const checkUserStatus = async (email: string): Promise<void> => {
    const userStatus = await store.getUserStatus(email);
    errorFlags.email.value = userStatus !== 'Nonexistent';
    if (errorFlags.email.value) {
        errorMessages.email.value = 'This email is already registered';
    } else {
        validInputs.email.value = true;
    }
};

watchDebounced(
    inputs.password,
    () => {
        validInputs.password.value = false;
        errorFlags.password.value = !checkWithRegex('password', inputs.password.value);
        if (errorFlags.password.value) {
            errorMessages.password.value = 'Password must be at least 8 characters long, contain at least 1 uppercase letter and 1 number';
        } else {
            validInputs.password.value = true;
        }
    },
    { debounce: 250, maxWait: 600 },
);

watchDebounced(
    inputs.passwordConfirmation,
    () => {
        validInputs.password.value = false;
        errorFlags.passwordConfirmation.value = inputs.password.value !== inputs.passwordConfirmation.value;
        if (errorFlags.password.value) {
            errorMessages.passwordConfirmation.value = 'Passwords and its confirmation must match';
        } else {
            validInputs.password.value = true;
        }
    },
    { debounce: 250, maxWait: 600 },
);
</script>

<style lang="sass" scoped>

</style>
