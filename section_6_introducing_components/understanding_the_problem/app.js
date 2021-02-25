// This is an example of how to define components, but is not scalable and maintainable as a good development environment when it comes to having templated strings and being able to add more and more data which expands the list of friends

const app = Vue.createApp({
    data(){
        return{
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 434 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
   <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
     <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
   </li>
  `,
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '0123 5678 991',
                email: 'manuel@localhost.com'
            },
        }
    },
    methods:{
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app')
