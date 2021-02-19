const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    addANum(num) {
      this.counter = this.counter + num;
    },
    reduce() {
      this.counter--;
    },
    reduceANum(num) {
      this.counter = this.counter - num;
    },
    setName(eventObject, lastName){
      this.name = eventObject.target.value + ' ' + lastName;
    },
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!');
    }
  }
});

app.mount('#events');
