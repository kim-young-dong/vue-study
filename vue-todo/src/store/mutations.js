const addTodo = (state, todoItem) => {
  const obj = {completed: false, item: todoItem};
  localStorage.setItem(obj.item, JSON.stringify(obj));
  state.todoItems.push(obj);
},
const removeTodo = (state, todoList) => {
  localStorage.removeItem(todoList.todoItem.item);
  state.todoItems.splice(todoList.index, 1);
},
const clearAllTodo = (state) => {
  localStorage.clear();
  state.todoItems = [];
},
const toggleComplet = (state, todoList) => {
  state.todoItems[todoList.index].completed =! state.todoItems[todoList.index].completed;
  localStorage.removeItem(todoList.todoItem.item);
  localStorage.setItem(todoList.todoItem.item, JSON.stringify(todoList.todoItem));
}
export {addTodo, removeTodo, clearAllTodo, toggleComplet}