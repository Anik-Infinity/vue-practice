const app = Vue.createApp({
  data() {
    return {
      result: 0
    };
  },
  watch: {
    getResult() {
      const that = this;
      setTimeout(function() {
        that.result = 0;
      }, 5000)
    }
  },
  computed: {
    getResult() {
      console.log(this.result)
      if(this.result < 37) return 'Not there yet'
      else if(this.result == 37) return 37
      else if(this.result > 37) return 'Too much!'
    }
  },
  methods: {
    add(number) {
      this.result += number;
    },
  },
});

app.mount("#assignment");
