<template>
  <td :class="rowClasses" v-if="props.multiSelect">
    <input type="checkbox" v-model="ticked" />
    {{ ticked }}
  </td>

  <td v-for="value in processedRow" :class="rowClasses">{{ value }}</td>
</template>

<script lang="ts" setup>
import clsx from 'clsx'
import { ref, watch, computed } from 'vue'

const props = defineProps({
  multiSelect: {
    type: Boolean,
    required: true
  },
  idColumn: {
    type: String,
    required: true
  },

  showIdColumn: {
    type: Boolean
  },
  selected: {
    type: Boolean
  },
  row: {
    type: Object,
    required: true
  },
  classes: {
    type: Array<string>
  }
})
const ticked = ref(props.selected)
const emit = defineEmits(['rowSelected', 'rowDeselected', 'error'])
const rowClasses = computed(() => clsx(props.classes, ticked.value == true && ['bg-red-300']))

const processedRow = computed((): any[] => {
  console.log(props.row)
  let allKeys = Object.keys(props.row)
  console.log(allKeys)
  let row: any[] = []
  for (let i = 0; i < allKeys.length; i++) {
    if (allKeys[i] === props.idColumn && props.showIdColumn === false) {
      continue
    } else {
      row.push(props.row[allKeys[i]])
    }
  }
  return row
})

watch(ticked, async (newValue) => {
  if (newValue == true) {
    emit('rowSelected', props.row[props.idColumn])
  } else {
    emit('rowDeselected', props.row[props.idColumn])
  }
})
</script>

<style></style>
