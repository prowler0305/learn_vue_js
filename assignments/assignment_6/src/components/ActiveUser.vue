<template>
  <header>
    <h2>Your Name: {{name}}</h2>
    <h3>Your Age: {{age}}</h3>
  </header>
</template>

<script>
export default {
  name: "ActiveUser",
  props:{
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
