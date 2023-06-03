<template>
    <div class="state-label">
        {{ props.title }}
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    title: { type: String, required: true },
    color: { type: String, required: true },
});

const titleColor = computed(() => {
    return props.color;
});
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.scss'

.state-label
    color: $background
    background-color: v-bind(titleColor)
    padding: 6px 24px
    border-radius: 20px
</style>
