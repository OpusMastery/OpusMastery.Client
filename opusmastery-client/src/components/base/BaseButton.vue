<template>
    <q-btn
        rounded
        no-caps
        no-wrap
        @click="$emit('callback')"
        :disable="props.disabled"
        :class="['base-button', accent]"
        style="width: 100%"
    >
        <template v-if="props.icon">
            <q-icon
                :class="props.text ? 'default-inner-icon' : ''"
                :name="props.icon"
            />
        </template>
        {{ props.text }}
    </q-btn>
</template>

<script setup lang="ts">
const props = defineProps({
    text: { type: String, default: undefined },
    icon: { type: String, default: undefined },
    accent: { type: String, default: undefined, validator: (value: string) => ['primary', 'secondary'].includes(value) },
    disabled: { type: Boolean, default: false },
});

defineEmits<{
    (event: 'callback'): void
}>();
</script>

<style lang="sass" scoped>
@import 'src/css/quasar.variables.scss'

.base-button[disabled]
    pointer-events: none

.primary
    background-color: $primary
    color: $secondary

.secondary
    background-color: $secondary
    color: $primary
</style>
