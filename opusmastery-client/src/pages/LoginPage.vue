<template>
    <div class="login">
        <q-card class="employee-card">
            <q-card-section class="text-black card-entry">
                <div class="employee-general-info">
                    <q-avatar rounded size="76px">
                        <img src="https://cdn.quasar.dev/img/avatar.png" alt="Employee avatar">
                    </q-avatar>
                    <div class="text-h6">{{name}}</div>
                    <div class="text-subtitle2 text-grey">{{position}}</div>
                    <q-btn unelevated rounded color="primary" label="Active" :disabled="password.length === 0" />
                </div>
            </q-card-section>

            <q-card-section class="card-entry">
                <div class="employee-contact-info">
                    <div class="text-subtitle1 text-black"> <q-icon :name="matMailOutline" /> &nbsp;{{email}}</div>
                    <div class="text-subtitle1 text-black"> <q-icon :name="matPhoneIphone" /> &nbsp;{{phone}}</div>
                </div>
            </q-card-section>

            <q-card-section class="card-entry">
                <div class="employee-work-info">
                    <div class="employee-work-info-row">
                        <div class="text-subtitle1 text-black">Department</div>
                        <div class="text-subtitle1 text-black">R&D</div>
                    </div>
                    <div class="employee-work-info-row">
                        <div class="text-subtitle1 text-black">Date of joining</div>
                        <div class="text-subtitle1 text-black">Today</div>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>

<!--    <div class="login">-->
<!--        <div class="text-h3">-->
<!--            Login into The Hub <q-badge align="middle">v1.1.000</q-badge>-->
<!--        </div>-->
<!--        <form @submit.prevent="submitLoginForm">-->
<!--            <div>-->
<!--                <label>Email:</label>-->
<!--                <input id="email" v-model="email" type="email" required>-->
<!--            </div>-->
<!--            <div>-->
<!--                <label>Password:</label>-->
<!--                <input id="password" v-model="password" type="password" required>-->
<!--            </div>-->
<!--            <button type="submit">-->
<!--                Login-->
<!--            </button>-->
<!--        </form>-->
<!--    </div>-->
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { loginWithPassword } from 'src/api/identity';
import { matMailOutline, matPhoneIphone } from '@quasar/extras/material-icons'

const name = 'Rostyslav Nakarlovich';
const position = 'Software Engineer';
const email = ref('zvesdochyot@gmail.com');
const phone = ref('(209)-101-0109');
const password = ref('');

onMounted(() => {
    console.log(email);
});

onBeforeMount(() => {
    console.log('Kel-Tec Farm');
});

const submitLoginForm = async () => {
    // FIXME: for debug only!
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

.employee-card
    width: 100%
    max-width: 328px
    border-radius: 18px

.card-entry
    padding: 0 10px 10px

.employee-general-info
    min-height: 228px
    padding: 22px 0 0
    display: flex
    flex-flow: column wrap
    row-gap: 10px
    align-items: center

.employee-contact-info
    padding: 10px 16px
    border-radius: 18px
    background-color: rgb(196, 151, 91, .2)
    text-align: left

.employee-work-info
    padding: 10px 16px
    border-radius: 18px
    background-color: rgba(191, 167, 249, .2)
    display: flex
    flex-flow: column wrap
    row-gap: 6px

.employee-work-info-row
    display: flex
    justify-content: space-between
</style>
