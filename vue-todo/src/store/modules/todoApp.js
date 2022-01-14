const storege = {
  fetch() {
      const arr = [];
      if(localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

const state = {
  todoItems: storege.fetch()
} 

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
}

const mutations = {
  addTodo(state, todoItem) {
    const obj = {completed: false, item: todoItem};
    localStorage.setItem(obj.item, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeTodo(state, todoList) {
    localStorage.removeItem(todoList.todoItem.item);
    state.todoItems.splice(todoList.index, 1);
  },
  clearAllTodo(state) {
    localStorage.clear();
    state.todoItems = [];
  },
  toggleComplet(state, todoList) {
    state.todoItems[todoList.index].completed =! state.todoItems[todoList.index].completed;
    localStorage.removeItem(todoList.todoItem.item);
    localStorage.setItem(todoList.todoItem.item, JSON.stringify(todoList.todoItem));
  }
}
export default {state, getters, mutations}