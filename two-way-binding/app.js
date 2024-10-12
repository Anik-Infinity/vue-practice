const app = Vue.createApp({
    data() {
        return {
            name: ''
        }
    },
    methods: {
        /*updateName(event) {
            console.log('invoked')
            this.name = event.target.value;
        },*/
        resetName() {
            this.name = ''
        } 
    }
})

app.mount('#app')
