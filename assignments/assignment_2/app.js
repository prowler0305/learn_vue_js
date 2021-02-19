const app = Vue.createApp({
    data(){
        return {
            user_input_1: '',
            user_input_2: ''
        };
    },
    methods: {
        alertButton(){
            alert("You've clicked the Show Alert button.")
        },
        setUserInput1(eventObject){
            this.user_input_1 = eventObject.target.value;
        },
        setUserInput2(eventObject){
            this.user_input_2 = eventObject.target.value;
        }
    }
});

app.mount('#assignment')
