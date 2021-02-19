const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullNameWatched: '',
      lastName: ''
    };
  },
  watch: {
    counter(value){
      if (value > 50){
        const that = this
        setTimeout(function (){
          that.counter = 0;
        },2000)
        // this.counter = 0;
      }
    },
    name(value) {
      if (value === '') {
        this.fullNameWatched = '';
      } else {
        this.fullNameWatched = value + ' ' + this.lastName;
      }
    },
    lastName(value){
      if (value === '') {
        this.fullNameWatched = '';
      } else {
        this.fullNameWatched = this.name + ' ' + value;
      }
    }
  },
  computed: {
    fullname() {
      console.log('Computed property running again...');
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Spear';
    },
    fullNameTwoDependencies(){
      console.log('Computed property with 2 Dependencies running again...');
      if (this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  }
  ,
  methods: {
    outputFullName(){
      console.log('Running again...');
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Spear';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
      this.lastName = '';
    }
  }
});

app.mount('#events');
