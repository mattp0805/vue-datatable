<script setup lang="ts">
import DataTable from './components/DataTable.vue'

</script>

<template>
 <div class=" flex flex-col justify-start">
    <h1 class="text-2xl mx-auto ">Campaigns</h1>
    <DataTable class="w-10/12 mx-auto" :data="campaigns" :options="tableOptions" />
  </div>
</template>

<style>

</style>
