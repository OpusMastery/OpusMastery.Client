<template>
    <q-input
        :type="props.type"
        :label="props.label"
        stack-label
        :placeholder="props.placeholder"
        :hint="props.hint"
        hide-hint
        maxlength="128"
        class="base-input"
    >
        <template #append v-if="props.isClearable">
            <q-icon :name="laEraserSolid" class="cursor-pointer" />
        </template>
    </q-input>
</template>

<script setup lang="ts">
import { laEraserSolid } from '@quasar/extras/line-awesome'

const props = defineProps({
    type: { type: undefined, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, default: undefined },
    hint: { type: String, default: undefined },
    isClearable: { type: Boolean, default: false },
});
</script>

<style lang="sass" scoped>
.base-input
    width: 100%
</style>
