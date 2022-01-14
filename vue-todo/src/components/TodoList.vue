<template>
  <section>
    <transition-group name="list" tag='ul'>
      <li class="shadow" v-for="(todoItem, index) in this.todoItems" 
      :key="todoItem.item">
        <i class="checkBtn fas fa-check" aria-hidden="true" 
        @click="toggleComplet({todoItem, index})"
        v-bind:class="{checkBtnCompleted: todoItem.completed}"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}"> 
          {{todoItem.item}}
          </span>
        <span class="removeBtn" type='button' @click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['removeTodo','toggleComplet']),
  },
  computed: {
    ...mapGetters({
      todoItems: 'storedTodoItems'
    })
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: left;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
i.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted{
  text-decoration-line: line-through;
  color: #b3adad;
}
.checkBtn {
  line-height: 50px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>