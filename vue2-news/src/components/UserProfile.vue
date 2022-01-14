<template>
  <div>
    <div class="user-container">
      <p class="user-icon">
        <i class="fas fa-user"></i>
      </p>
      <div class="user-discription">
        <slot name='username'></slot>
        <slot name="time"></slot>  
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
    ...mapGetters([
      'fetchedUserInfo'
    ])
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  padding: 0.5rem;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-discription {
  padding-left: 8px;
  display: inline-flex;
  flex-direction: column
}
</style>