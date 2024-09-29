const app = Vue.createApp({
  data() {
    return {
      name: "Doges",
      age: 2,
      imgSrc: "https://picsum.photos/id/237/200/300",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random()
    }
  },
});

app.mount("#assignment");
