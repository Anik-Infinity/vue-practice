const app = Vue.createApp({
  data() {
    return {
        message: 'OUTPUT',
        message2: 'OUTPUT'
    }
  },
  methods: {
    showAlert() {
      console.log("show alert invoked!");
      alert("Hello Vue!");
    },
    setMessage(event) {
        this.message = event.target.value
    },
    setMessageOnPressEnter(event) {
        this.message2 = this.message
    }
  },
});

app.mount("#assignment");
