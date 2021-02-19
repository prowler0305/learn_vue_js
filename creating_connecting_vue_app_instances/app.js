const app = Vue.createApp({
    data() {
        return {
            staticCourseGoal: 'Finish the course and learn Vue!',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            courseGoalC: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://v3.vuejs.org/'
        };
    },
    methods: {
        randomGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        },
        courseGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal')
