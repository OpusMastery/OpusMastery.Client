<template>
    <q-header>
        <q-toolbar>
            <q-btn @click="goToLanding()" class="color-primary text-bold" flat>OpusMastery</q-btn>
            <q-space />
            <div class="login">
                <q-btn @click="goToSignIn()" rounded no-caps class="btn-round color-primary text-bold">Sign in</q-btn>
                <q-separator vertical dark />
                <q-btn @click="goToSignUp()" rounded no-caps class="btn-round color-primary text-bold">Try now</q-btn>
            </div>
        </q-toolbar>
    </q-header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

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
.login
    display: flex
    flex-flow: row wrap
    column-gap: 8px
</style>
