<template>
    <th :class="headerClasses" @click="changeSort">
        {{ title }}
        <div v-if="sortable">
            <div v-if="sortedBy">
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                    <path d="M6 9L12 15L18 9" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </div>
            <div v-else>
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg" color="#000000">
                    <path d="M6 15L12 9L18 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>

            </div>
        </div>
    </th>
</template>

<script lang="ts" setup>
import clsx from 'clsx'
import { computed, useSlots, defineEmits } from 'vue'
const slots = useSlots();

const props = defineProps<{ 'title': string, 'sortable': Boolean, sortedBy: Boolean, sortedDirection: SortDirections, selectedClasses: string[] }>()

const emit = defineEmits(['changeSort'])
const headerClasses = computed(() => {
    return clsx(
        ["flex", "justify-start"],
        props.sortedBy && props.selectedClasses)
})

const changeSort = () => {
    emit('changeSort', [{ sortedDirection: props.sortedDirection, sortedField: props.title }])
}

</script> 
