const app = Vue.createApp({
  data() {
    return {
      value: '',
      text: '',
      refText: '',
    };
  },
  methods: {
    setText() {
      this.text = this.value;
    },
    setTextUsingRef() {
      this.refText = this.$refs.userInput.value;
    },
  },
});

app.mount('#app');
