const app = Vue.createApp({
  data() {
    return {
      boxAClasses: false,
      boxBClasses: false,
      boxCClasses: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') this.boxAClasses = !this.boxAClasses;
      else if (box === 'B') this.boxBClasses = !this.boxBClasses;
      else if (box === 'C') this.boxCClasses = !this.boxCClasses;
    },
  },
  computed: {
    isBoxCActive() {
      // return this.boxCClasses ? 'active' : 'null';
      return { active: this.boxCClasses };
    },
  },
});

app.mount('#app');
