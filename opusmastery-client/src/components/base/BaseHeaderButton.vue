<template>
    <q-btn
        flat
        no-caps
        no-wrap
        class="base-header-button text-medium"
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
    text: { type: String , required: true },
    icon: { type: String , default: undefined },
});
</script>

<style lang="sass" scoped>
.base-header-button
    padding: 14px 28px
    font-size: 14px
    border-radius: 28px
</style>
