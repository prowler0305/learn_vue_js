const app = Vue.createApp({
    data(){
        return{
            enteredTaskValue: '',
            tasks: [],
            isVisible: true
        }
    },
    computed: {
        buttonText(){
            return this.isVisible ? 'Hide List' : 'Show List'
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTaskValue)
            this.enteredTaskValue = ''
        },
        setShowHide(){
            this.isVisible = !this.isVisible
        }
    }
});

app.mount('#assignment')
