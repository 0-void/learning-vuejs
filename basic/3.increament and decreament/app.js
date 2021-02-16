const app = Vue.createApp({
  data() {
    return {
      name: '',
      count: 0,
    };
  },
  methods: {
    add(num) {
      this.count = this.count + num;
    },
    reset() {
      this.count = 0;
    },
    setName({ target: { value } }) {
      this.name = value;
    },
  },
});

app.mount('#app');
