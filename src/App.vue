<script setup lang="ts">
import DataTable from './components/DataTable.vue'
import { campaigns } from '../mockData/campaigns.json'
import type { DataTableOptionsProps } from './types'

const tableOptions: DataTableOptionsProps = {
  idColumn: 'id',
  showIdColumn: false,
  headerClasses: ['bg-primary-content']
}
</script>

<template>
  <div class="flex flex-col justify-start">
    <h1 class="text-2xl mx-auto">Campaigns</h1>
    <DataTable class="w-10/12 mx-auto" :data="campaigns" :options="tableOptions" />
  </div>
</template>

<style></style>
