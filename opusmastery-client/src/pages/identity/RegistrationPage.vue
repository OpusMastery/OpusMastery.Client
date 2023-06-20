<template>
    <div class="registration-form">
        <div class="q-gutter-y-md">
            <div class="text-h4 text-bold q-my-md">
                Create a free account
            </div>
            <div class="text-subtitle1 text-grey-7 text-medium q-my-md">
                You are just one step away from unlocking the powerful tool to manage your company
            </div>
            <div>
                <BaseInput
                    v-model="inputs.email.value"
                    type="email"
                    label="Email"
                    placeholder="Enter your work email"
                    :has-error="errorFlags.email.value"
                    :error-message="errorMessages.email.value"
                />
            </div>
            <div class="row q-gutter-md">
                <div class="col-auto" style="flex: 1">
                    <BaseInput
                        v-model="inputs.password.value"
                        type="password"
                        label="Password"
                        placeholder="Think of secure password"
                        hint="Must be between 8 and 64 characters"
                        :has-error="errorFlags.password.value"
                        :error-message="errorMessages.password.value"
                    />
                </div>
                <div class="col-auto" style="flex: 1">
                    <BaseInput
                        v-model="inputs.passwordConfirmation.value"
                        type="password"
                        label="Password confirmation"
                        placeholder="Confirm your password"
                        :has-error="errorFlags.passwordConfirmation.value"
                        :error-message="errorMessages.passwordConfirmation.value"
                    />
                </div>
            </div>
            <div class="row q-gutter-md">
                <div class="col-auto" style="flex: 1">
                    <BaseInput
                        v-model="inputs.firstName.value"
                        type="text"
                        label="First Name"
                        placeholder="Enter your first name"
                    />
                </div>
                <div class="col-auto" style="flex: 1">
                    <BaseInput
                        v-model="inputs.lastName.value"
                        type="text"
                        label="Last Name"
                        placeholder="Enter your last name"
                    />
                </div>
            </div>
            <div>
                <BaseButton
                    @callback="register"
                    text="Register now"
                    accent="primary"
                    :disabled="!hasAllCorrectInputs"
                    style="margin-top: 18px"
                    class="text-bold"
                />
            </div>
        </div>
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
    passwordConfirmation: ref(false),
};

const hasAllCorrectInputs = computed(() => {
    return validInputs.email.value && validInputs.password.value && validInputs.passwordConfirmation.value;
});

const register = async () => {
    const status = await checkUserStatus(inputs.email.value);
    if (status === 'Nonexistent') {
        await store.registerUser({
            email: inputs.email.value,
            password: inputs.password.value,
            firstName: inputs.firstName.value,
            lastName: inputs.lastName.value,
        });

        await store.authenticateUser({
            email: inputs.email.value,
            password: inputs.password.value,
        });
    }
};

watchDebounced(
    inputs.email,
    async () => {
        errorFlags.email.value = !checkWithRegex('email', inputs.email.value);

        if (errorFlags.email.value) {
            validInputs.email.value = false;
            errorMessages.email.value = 'Please write your email in correct format';
        } else {
            await checkUserStatus(inputs.email.value);
        }
    },
    { debounce: 250, maxWait: 600 },
);

const checkUserStatus = async (email: string): Promise<string> => {
    const userStatus = await store.getUserStatus(email);
    errorFlags.email.value = userStatus !== 'Nonexistent';

    if (errorFlags.email.value) {
        errorMessages.email.value = 'This email is already registered';
    } else {
        validInputs.email.value = true;
    }

    return userStatus;
};

watchDebounced(
    inputs.password,
    () => {
        errorFlags.password.value = !checkWithRegex('password', inputs.password.value);

        if (errorFlags.password.value) {
            validInputs.password.value = false;
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
        errorFlags.passwordConfirmation.value = inputs.password.value !== inputs.passwordConfirmation.value;

        if (errorFlags.passwordConfirmation.value) {
            validInputs.passwordConfirmation.value = false;
            errorMessages.passwordConfirmation.value = 'Password and its confirmation must match';
        } else {
            validInputs.passwordConfirmation.value = true;
        }
    },
    { debounce: 250, maxWait: 600 },
);
</script>

<style lang="sass" scoped>
.registration-form
    min-height: 75vh
    display: flex
    justify-content: center
    align-items: center

.registration-form > div
    width: 100%
    max-width: 672px
</style>
