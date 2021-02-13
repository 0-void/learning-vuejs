Vue.createApp({
  data() {
    return {
      todos: [],
      value: '',
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.value);
      this.value = '';
    },
  },
}).mount('#app');
