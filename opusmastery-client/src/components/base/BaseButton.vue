<template>
    <q-btn
        rounded
        no-caps
        no-wrap
        @click="$emit('callback')"
        :disable="props.disabled"
        :class="['base-button', fontSizeClass, accent]"
    >
        <template v-if="props.icon">
            <q-icon
                :class="props.text ? 'inner-icon' : ''"
                :name="props.icon"
            />
        </template>
        {{ props.text }}
    </q-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    text: { type: String, default: undefined },
    fontSize: { type: String, default: undefined, validator: (value: string) => ['small', 'medium', 'large'].includes(value) },
    icon: { type: String, default: undefined },
    accent: { type: String, default: undefined, validator: (value: string) => ['primary', 'secondary'].includes(value) },
    disabled: { type: Boolean, default: false },
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
@import 'src/css/quasar.variables.scss'

.base-button
    width: 100%

.base-button[disabled]
    pointer-events: none

.primary
    background-color: $primary
    color: $secondary

.secondary
    background-color: $secondary
    color: $primary

.inner-icon
    margin-right: 4px
</style>
