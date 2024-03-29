<template>
  <table v-if="error === null" class="border-separate border-spacing-1 border border-slate-500 ...">
    <thead>
      <HeaderRow :multi-select="options.multiSelect" :headers="createHeaders!" :classes="options.headerClasses"
        :sort-options="options.sort" :id-column="options.idColumn" :show-id-column="options.showIdColumn"
        @change-sort="changeSort" />
    </thead>
    <tbody>
      <tr class="border border-primary" v-for="row in processedRows" v-bind:key="row.id">
        <Row :row="row" :multi-select="options.multiSelect" @row-selected="addRowToSelected"
          @row-deselected="removeRowFromSelected" @select-all="selectAll" @deselect-all="deselectAll"
          :id-column="options.idColumn" :show-id-column="options.showIdColumn" />
      </tr>
    </tbody>
  </table>
  <div v-else>
    <p>{{ error }}</p>
  </div>
  <!-- <div>
    {{ options.sort.direction + ' ' + options.sort.field }}
  </div>
  <div>
    {{ processedRows }}
  </div>
  <div>
    {{ options.sort }}
  </div> -->
</template>

<script lang="ts" setup>
import HeaderRow from './HeaderRow.vue'
import Row from './Row.vue'
import { ref, computed, type Ref } from 'vue'
import {
  DataTableOptions,
  type DataTableError,
  type DataTableOptionsProps,
  type InputData,
  type SortDirections
} from '../types'

const props = defineProps<{ data: object[]; options: DataTableOptionsProps }>()

//Refs
const selectedRows: Ref<Array<String>> = ref([])
const options = ref(new DataTableOptions(props.options))

//Computed
const error = computed((): DataTableError => {
  if (createHeaders.value === null) {
    return `Error creating headers, no id column ${options.value.idColumn} found in data.`
  }
  if (processedRows.value === null) {
    return `Direction for Sorting or Sort Field Name are invalid.`
  }
  return null
})

const createHeaders = computed((): string[] | null => {
  let allKeys = Object.keys(props.data[0])
  const indexOfIdColumn = allKeys.indexOf(options.value.idColumn)
  if (indexOfIdColumn == -1) {
    return null
  }
  if (options.value.showIdColumn) {
    return allKeys
  }
  allKeys.splice(indexOfIdColumn, 1)
  return allKeys
})

const processedRows = computed((): InputData | null => {
  const data = props.data as InputData
  if (('direction' in options.value.sort && options.value.sort.direction === undefined) || ('field' in options.value.sort && options.value.sort.field === undefined)) {
    return null
  }
  data.sort(compareFunction)
  return data
})


//Event Handlers
const addRowToSelected = (rowId: string) => {
  if (selectedRows.value.includes(rowId) === false) {
    selectedRows.value.push(rowId)
  }
}
const removeRowFromSelected = (rowId: string) => {
  const index = selectedRows.value.indexOf(rowId)
  if (index > -1) {
    selectedRows.value.splice(index, 1)
  }
}

const selectAll = () => {
  if (processedRows.value) {
    processedRows.value.forEach((row, i) => {
      if (
        options.value.idColumn in row &&
        selectedRows.value.includes(row[options.value.idColumn]) === false
      ) {
        selectedRows.value.push(row[options.value.idColumn])
      }
    })
  }
}

const deselectAll = () => {
  selectedRows.value = []
}

//Helpers
const changeSort = (args: { sortedDirection: SortDirections; sortedField: string }[]) => {
  if (options.value.sort.field === args[0].sortedField) {
    options.value.sort.direction = args[0].sortedDirection == 'asc' ? 'desc' : 'asc'
  } else {
    options.value.sort.direction = 'asc'
    options.value.sort.field = args[0].sortedField
  }
}

const compareFunction = (a: any, b: any) => {
  const sortDirection = options.value.sort.direction
  const sortField = options.value.sort.field
  let returnValue = 0
  if (a[sortField] < b[sortField]) {
    returnValue = -1
  } else if (a[sortField] > b[sortField]) {
    returnValue = 1
  } else {
    returnValue = 0
  }

  if (sortDirection === 'asc') {
    return returnValue
  }
  // else sortDirection is "desc"
  return returnValue * -1
}
</script>

<style></style>
