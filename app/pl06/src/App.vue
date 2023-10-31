<script setup>
import master from "./layout/master.vue"
import Header from "./layout/header.vue"
import Footer from "./layout/footer.vue"
import Main from "./layout/main.vue" 
</script>

<template>
  <master>
    <template v-slot:header>
      <Header></Header>
    </template>
    <template v-slot:default>
      <Main></Main>
    </template>
    <template v-slot:footer>
      <Footer></Footer>
    </template>
  </master>
</template>

<script>
</script>

<style scoped></style>
