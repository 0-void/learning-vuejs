const app = Vue.createApp({
  data() {
    return {
      googleLink: 'https://www.google.com',
    };
  },
  methods: {
    getRandomNumber() {
      return Math.floor(Math.random() * 10);
    },
  },
});

app.mount('#app');
