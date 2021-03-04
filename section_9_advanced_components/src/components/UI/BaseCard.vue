<template>
  <div>
<!-- Using $slots.header check if the passed in content contains a header to only output it
     when provided -->
    <header v-if="$slots.header">
      <slot name="header">
<!--        Below <h2></h2> only gets rendered if a component doesn't send in content for -->
<!--        the slot. If not using the v-if above in the <header>-->
<!--        <h2>The Default</h2>-->
      </slot>
    </header>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  // mounted(){
  //   // $slots allows you to access your named slots
  //   console.log(this.$slots.header);
  // }
}
</script>

<style scoped>
/*This styling is provided via this component being added as a <slot> in other components*/
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
