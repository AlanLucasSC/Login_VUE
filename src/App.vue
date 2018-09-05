<template>
    <div id="app">
        <app-router></app-router>
    </div>
</template>

<script>
import AppRouter from "./router/router.vue";

export default {
  name: 'app',
  components: {
    AppRouter
  }
}
</script>

<style>
</style>
