const app = Vue.createApp({
  data() {
    return {
      value: 'hello world',
    };
  },
  methods: {
    changeValue() {
      console.log("getting called");
      this.value = 'hello world';
    },
  },
  beforeCreate() {
    console.log('Before created()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('Before mounted');
  },
  mounted() {
    console.log('Mounted');
    setTimeout(() => {
      this.value = 'hi there';
    }, 4000);
  },
  beforeUpdate() {
    console.log('Before updated');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmounted() {
    console.log('before unmounted');
  },
  unmounted() {
    console.log('unmounted');
  },
});

app.mount('#app');
