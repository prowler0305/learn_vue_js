<template>
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide':'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>email:</strong>{{friend.email}}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data(){
    return{
      detailsAreVisible: false,
      friend: {
        id: 'william',
        name: 'William Loza',
        phone: '012-345-6789',
        email: 'William.Loza@localhost.com'
      },
    };
  },
  methods:{
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
}
</script>

<style scoped>

</style>
