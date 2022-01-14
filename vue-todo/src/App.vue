<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList ></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

export default {
  components: {
    TodoHeader,
    TodoFooter,
    TodoList,
    TodoInput
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  vertical-align: baseline;
  font-family: 'Noto Sans', sans-serif;
}
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.05);
}
</style>
