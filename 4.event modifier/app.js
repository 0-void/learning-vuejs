const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    submitForm(event){
      // event.preventDefault();
      alert("submitted form");
    }
  },
});

app.mount('#app');
