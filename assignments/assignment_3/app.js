const app = Vue.createApp({
    data(){
        return{
            result: 0
        };
    },
    watch:{
      show_result(){
          console.log('Watcher executing...');
          const that = this;
          setTimeout(function(){
              that.result = 0;
          }, 5000)
      }
    },
    methods: {
        add(num){
            this.result = this.result + num;
        }
    },
    computed: {
        show_result(){
            if (this.result < 37){
                return 'Not there yet!';
            }
            else if (this.result === 37){
                return this.result;
            }
            else{
                return 'Too much!';
            }
        }
    }
});

app.mount('#assignment')
