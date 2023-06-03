<template>
    <q-header elevated>
        <q-toolbar class="main-toolbar">
            <div class="main-toolbar-container">
                <img
                    @click="goToLanding()"
                    class="cursor-pointer"
                    src="images/logo-colored-horizontal-small.svg"
                    alt="OpusMastery logo"
                >
                <q-space />
                <div class="login-section">
                    <BaseButton
                        @callback="goToSignIn"
                        text="Sign in"
                        :icon="laSignInAltSolid"
                        accent="secondary"
                        class="text-bold"
                    />
                    <q-separator vertical dark />
                    <BaseButton
                        @callback="goToSignUp"
                        text="Try now"
                        :icon="laIdCardSolid"
                        accent="secondary"
                        class="text-bold"
                    />
                </div>
            </div>
        </q-toolbar>
    </q-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { laSignInAltSolid, laIdCardSolid } from '@quasar/extras/line-awesome';
import BaseButton from 'components/base/BaseButton.vue';

const router = useRouter();

const goToLanding = () => {
    router.push({ name: 'LandingPage' });
}

const goToSignIn = () => {
    router.push({ name: 'SignInPage' });
}

const goToSignUp = () => {
    router.push({ name: 'SignUpPage' });
}
</script>

<style lang="sass" scoped>
.main-toolbar
    padding: 26px 46px 16px
    display: flex
    justify-content: center

.main-toolbar-container
    width: 100%
    max-width: 1408px
    display: flex
    align-items: center

.login-section
    display: flex
    column-gap: 8px
</style>
