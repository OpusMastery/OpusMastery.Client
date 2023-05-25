<template>
    <div class="login">
        <h2>Login into The Hub</h2>
        <form @submit.prevent="submitLoginForm">
            <div>
                <label>Email:</label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                >
            </div>
            <div>
                <label>Password:</label>
                <input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                >
            </div>
        </form>
        <button type="submit">
            Login
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'LoginPage',
    setup() {
        const email = ref('')
        const password = ref('')

        const submitLoginForm = () => {
            console.log(`Email: ${email.value}, Password: ${password.value}`)
        }

        return { email, password, submitLoginForm }
    }
})
</script>

<style scoped>
.login {
    text-align: center;
    padding: 20px;
}

.login form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
}
</style>
