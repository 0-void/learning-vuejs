const app = Vue.createApp({
  data() {
    return {
      rawHtml: "<h2>hello world</h2>"
    };
  },
});

app.mount('#app');
