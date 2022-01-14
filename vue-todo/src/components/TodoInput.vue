<template>
  <div class="inputBox shadow">
    <input type="text" 
    placeholder="Type what you have to do?"
    v-model="newTodoItem"
    @keyup.enter = 'addTodo'>
    <span class="addContainer" @click='addTodo'>
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
      </h3>
      <span slot="footer">
        할 일을 입력하세요.
      </span>
    </Modal>
    <section>
    </section>
  </div>  

</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== '') {
        const value = this.newTodoItem.trim();
        this.$store.commit('addTodo', value);
        this.clearInput();
      }else{
        this.showModal = ! this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal
  }
}

</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;  
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  width: 100%;
  margin: 0 auto;
  border-style: none;
  font-size: 0.9rem;
  vertical-align: middle;
  text-align: center;
}
.addContainer {
  background: linear-gradient(to right, #6478fb, #8763fb);
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>