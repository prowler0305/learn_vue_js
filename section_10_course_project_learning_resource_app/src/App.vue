<template>
  <div>
    <the-header title="Remember Me"></the-header>
    <the-resources></the-resources>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheResources from "@/components/learning-resources/TheResources";

export default {
  name: "App",
  components:{
    TheResources,
    TheHeader,
  },
  // data(){
  //   return{
  //   }
  // }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
