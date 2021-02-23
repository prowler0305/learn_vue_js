const app = Vue.createApp({
    data(){
        return {
            userCSS: '',
            isVisible: true,
            userBgColor: '',
        }
    },
    watch: {
        userBgColor(value){
            this.userBgColor = value
        }
    },
    computed: {
        paraClasses(){
            return{
                user1: this.userCSS === 'user1',
                user2: this.userCSS === 'user2',
                visible: this.isVisible,
                hidden: !this.isVisible
            };
        },
    },
    methods: {
        showOrHide(){
            this.isVisible = !this.isVisible
        }
    }
});

app.mount('#assignment')
