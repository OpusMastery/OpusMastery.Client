<template>
    <q-btn
        rounded
        no-caps
        @click="$emit('callback')"
        :disable="props.disabled"
        :class="fontSizeClass"
        class="base-button"
    >
        <template v-if="props.icon">
            <q-icon class="inner-icon" :name="props.icon" />
        </template>
        {{ props.text }}
    </q-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    text: { type: String, required: true },
    fontSize: { type: String, required: true, validator: (value: string) => ['small', 'medium', 'large'].includes(value) },
    disabled: { type: Boolean, default: false },
    icon: { type: String, default: null }
});

defineEmits<{
    (event: 'callback'): void
}>();

const fontSizeClass = computed(() => {
    if (props.fontSize === 'small') return 'text-regular';
    else if (props.fontSize === 'medium') return 'text-medium';
    else return 'text-bold';
});
</script>

<style lang="sass" scoped>
.base-button[disabled]
    pointer-events: none

.inner-icon
    margin-right: 4px
</style>
