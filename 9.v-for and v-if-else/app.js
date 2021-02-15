const app = Vue.createApp({
  data() {
    return {
      todos: [],
      value: '',
    };
  },
  methods: {
    addTodo(){
      this.todos.push(this.value);
      this.value = ''
    },
    removeTodo(index){
      console.log(index);
      this.todos.splice(index, 1);
    }
  },
});

app.mount('#app');
