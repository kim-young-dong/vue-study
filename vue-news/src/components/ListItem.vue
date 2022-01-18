<template>
  <div>
    <ul class="list">
      <li v-for="item in listItems" :key="item.id" class="post"> 
        <!-- 포인트 영역 -->
        <div class="points">
          {{item.points || 0}}
        </div>
        <!-- 기타 정보 영역 -->
        <div class="content">
          <!-- 타이틀 영역 -->
          <p class="content-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{item.title}}
              </a>                    
            </template>
            <template v-else>
              <router-link :to='`/item/${item.id}`'>
                {{item.title}}
              </router-link>              
            </template>
          </p> 
          <small class="user-text">
            {{item.time_ago}}  by 
            <router-link v-if="item.user" :to='`/user/${item.user}`'>
              {{item.user}}
            </router-link>
            <a :href="item.url" v-else>
              {{item.domain}}
            </a>              
          </small>
        </div>
      </li>
    </ul>    
  </div>
</template>

<script>
import bus from '../utills/bus.js'

export default {
  computed: {
    listItems() {
      return this.$store.state.list;
    }    
  },
  mounted() {
    bus.$emit('end:spinner');
  }  
  
}
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
}
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
}
.points {
  width: 80px;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #41b883;
}
</style>