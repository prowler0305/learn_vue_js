const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.log(this.$refs.userText);
      // console.dir(this.$refs.userText);
    },
  },
  beforeCreate(){
    console.log('beforeCreate()');
  },
  created(){
    console.log('created()');
  },
  beforeMount(){
    console.log('beforeMount()');
  },
  mounted(){
    console.log('mounted()');
  },
  beforeUpdate(){
    console.log('beforeUpdate()');
  },
  updated(){
    console.log('updated()');
  },
  beforeUnmount(){
    console.log('beforeUnmount()')
  },
  unmounted(){
    console.log('unmounted()')
  }
});

app.mount('#app');
setTimeout(function (){
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: `
        <p>{{favoriteMeal}}</p>
`,
  data(){
    return {
      favoriteMeal: 'Pizza'
    };
  }
});

app2.mount('#app2')

//....Vanilla Javascript

// message property doesn't get updated. Javascript doesn't know that 'message' changed.
// let message = 'Hello!';
//
// let longMessage = message + 'World!';
//
// console.log(longMessage);
//
// message = 'Hello!!!!';
// console.log(longMessage);
//

// Example uses the Proxy concept to update the 'message' data property.
// const data = {
//   message: 'Hello!',
//   longMessage: 'Hello! World!'
// };
//
// const handler = {
//   set(target, key, value){
//     if (key === 'message'){
//       target.longMessage = value + 'World!';
//     }
//     target.message = value;
//   }
// };
// const proxy = new Proxy(data, handler);
//
// proxy.message = 'Hello!!!';
// console.log(proxy.longMessage);
