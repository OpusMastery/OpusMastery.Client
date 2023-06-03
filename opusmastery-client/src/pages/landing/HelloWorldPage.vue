<template>
    <q-page>
        <div class="text-h4">Joe Dirt<q-badge align="middle">v1.1.000</q-badge></div>
        <div class="card">
            <q-btn color="secondary" @click="count++">count equals to {{ count }}</q-btn>
            <p>
                Edit <code>components/HelloWorld.vue</code> to test HMR
            </p>
        </div>
        <p>
            Check out <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
        </p>
        <p>
            Install <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a> in your IDE for a better DX
        </p>
        <EmployeeCard
            full-name="Rostyslav Nakarlovich"
            position="Software Engineer"
            status="Active"
            email="example@gmail.com"
            phone="(209) 501-0109"
            department-name="R&D"
            date-of-joining="2022-07-21"
        />
    </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EmployeeCard from 'components/employee/EmployeeCard.vue';

const count = ref(0)
</script>
