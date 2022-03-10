<script setup>
import Header from './components/layouts/Header.vue'
</script>

<template>
    <main>
      <Header />
      
      <router-view></router-view>

    </main>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.css';

.title-page{
  text-align: center;
  font-weight: 500;
}

</style>
