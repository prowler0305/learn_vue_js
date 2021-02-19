const app = Vue.createApp({
    data() {
        return {
            myName: "Andrew Spear",
            myAge: 37,
            imageLink: "https://static.toiimg.com/photo/72975551.cms"
        };
    },
    methods: {
        agePlusFive() {
            return this.myAge + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment')
