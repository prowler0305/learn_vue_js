<template>
  <header>
    <h1>Add Friend</h1>
  </header>
  <form @submit.prevent="addContact">
    <div>
      <label>First Name:</label>
      <input type="text" v-model="firstName"/>
    </div>
    <div>
      <label>Last Name:</label>
      <input type="text" v-model="lastName"/>
    </div>
    <div>
      <label>Phone Number:</label>
      <input type="text" v-model="phoneNumber"/>
    </div>
    <div>
      <label>Email:</label>
      <input type="text" v-model="emailAddr"/>
    </div>
    <button>Add Friend</button>
  </form>
</template>

<script>
export default {
  emits: ['add-friend'],
  data(){
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddr: '',
    };
  },
  methods:{
    addContact(){
      const newFriend = {
        id: this.firstName,
        name: this.firstName + ' ' + this.lastName,
        phone: this.phoneNumber,
        email: this.emailAddr
      }
      this.$emit('add-friend', newFriend)
      this.firstName = ''
      this.lastName = ''
      this.phoneNumber = ''
      this.emailAddr = ''
    }
  }
}
</script>

<style scoped>

</style>
