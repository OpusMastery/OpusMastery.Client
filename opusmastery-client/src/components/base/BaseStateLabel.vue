<template>
    <div class="state-label">
        {{ props.title }}
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    title: string,
    color: string
}>();

const titleColor = computed(() => {
    return props.color;
});
</script>

<style lang="sass" scoped>
.state-label
    color: #ffffff
    background-color: v-bind(titleColor)
    padding: 6px 24px
    border-radius: 20px
</style>
