const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch:{
    counter(value){
      if(value > 10 || value < -10){
        this.counter = 0;
      }
    }
  },
  methods: {},
});

app.mount('#app');
