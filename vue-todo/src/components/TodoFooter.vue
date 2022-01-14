<template>
  <div class="clearAllContainer shadow">
    <span class="clearAllBtn" type='button' @click="clearAllTodo">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['clearAllTodo'])
  }
}
</script>

<style scoped>


.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 20px auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
