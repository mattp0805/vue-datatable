<template>
  <th :class="headerClasses" @click="changeSort">
    <div class="flex">
      {{ title }}
      <div v-if="sortable && sortedBy">
        <div :class="iconFlip">
          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <!-- <div v-else>
                    <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M6 15L12 9L18 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>

                </div> -->
      </div>
    </div>
  </th>
</template>

<script lang="ts" setup>
import type { SortDirections } from '@/types'
import clsx from 'clsx'
import { computed, defineEmits } from 'vue'

const props = defineProps<{
  title: string
  sortable: Boolean
  sortedBy: Boolean
  sortedDirection: SortDirections
  selectedClasses: string[]
}>()
console.log(props.sortedBy)

const emit = defineEmits(['changeSort'])
const headerClasses = computed(() => {
  return clsx(['justify-start'], props.sortedBy && props.selectedClasses)
})

const iconFlip = computed(() => {
  return clsx(props.sortedDirection == 'desc' && 'rotate-180')
})

const changeSort = () => {
  emit('changeSort', [{ sortedDirection: props.sortedDirection, sortedField: props.title }])
}
</script>
