<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal"/>
  <button @click="setGoal">Set Goal</button>
<!--INFO: <teleport> moves the element you wrap within it to whatever CSS element you identify in the "to" attribute. Doing this with this error alert ensures the html element is not nested deep within our app which works but could cause access issues and styling problems due to the nested nature. Instead since it is to be displayed as an overlay to the app teleport has the element added within the, in the case, <body> tag instead.-->
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is Invalid!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
  </teleport>
</template>

<script>
  import ErrorAlert from "@/components/ErrorAlert";
  export default{
    components: {ErrorAlert},
    data(){
      return{
        inputIsInvalid: false
      }
    },
    methods:{
      setGoal(){
        const enteredValue = this.$refs.goal.value;
        if (enteredValue === ''){
          this.inputIsInvalid = true
        }
      },
      confirmError(){
        this.inputIsInvalid = false
      }
    }
  }
</script>

