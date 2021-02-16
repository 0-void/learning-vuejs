const app = Vue.createApp({
  data() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  computed: {
    fullName() {
      if (this.firstName === '' || this.lastName === '') this.lastName = '';
      else return this.firstName + ' ' + this.lastName;
    },
  },
});

app.mount('#app');
