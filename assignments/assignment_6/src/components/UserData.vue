<template>
  <header>
    <h2>Active User Input</h2>
  </header>
  <form @submit.prevent="processUserData">
    <div>
      <label>Name:</label>
      <input type="text" v-model="enteredName"/>
    </div>
    <div>
      <label>Age:</label>
      <input type="text" v-model="enteredAge"/>
    </div>
    <button>Set User Data</button>
  </form>
</template>

<script>
export default {
  name: "UserData",
  emits:['set-user-data'],
  data(){
    return{
      enteredName: '',
      enteredAge: null
    }
  },
  methods:{
    processUserData(){
      this.$emit('set-user-data', this.enteredName, this.enteredAge)
      this.enteredName = ''
      this.enteredAge = ''
    }
  }
}
</script>

<style scoped>

</style>
