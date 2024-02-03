<template>
  <tr :class="headerClasses">
    <th v-if="props.multiSelect">
      <input type="checkbox" v-model="ticked" />
    </th>
    <AppDataTableHeaderField class="hover:bg-primary" v-for="header  in  headers" :sortable="props.sortOptions.sortable"
      :sorted-by="() => header == props.sortOptions.field ? true : false" :sorted-direction="props.sortOptions.direction"
      :selected-classes="props.sortOptions.selectedClasses" :title="header" @change-sort="changeSort">
    </AppDataTableHeaderField>
  </tr>
</template>

<script lang="ts" setup>
import clsx from 'clsx';
import { ref, watch } from 'vue'
import type { SortOptions } from '../DataTableOptions';

const ticked = ref(false)
const props = defineProps<{ multiSelect: boolean, headers: string[], classes: string[], sortOptions: SortOptions }>()
const emit = defineEmits(['selectAll', 'deselectAll', 'changeSort', 'sendError'])

const headerClasses = clsx(
  ["text-left",],
  props.classes,
);

const changeSort = (args: { sortedDirection: SortDirections, sortedField: string }[]) => {
  emit('changeSort', [{ sortedDirection: args[0].sortedDirection, sortedField: args[0].sortedField }])
}

watch(ticked, async (newValue) => {
  if (newValue == true) {
    emit('selectAll');
  } else {
    emit('deselectAll')
  }
})
</script>

<style></style>