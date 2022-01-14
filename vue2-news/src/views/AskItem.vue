<template>
  <div>
    <!-- 사용자 정보 -->
    <section>
      <UserProfile>
        <router-link slot="username" :to='`/user/${fetchedItemInfo.user}`'>{{fetchedItemInfo.user}}</router-link>
        <small slot="time">{{'Posted ' + fetchedItemInfo.time_ago}}</small>
      </UserProfile>             
    </section>
    <!-- 질문 -->
    <section>
      <h2>
        {{fetchedItemInfo.title}} 
      </h2>
      <div v-html="fetchedItemInfo.content"></div> 
    </section>
    <!-- 질문 댓글 -->
    <section>

    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import UserProfile from '../components/UserProfile.vue'

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters([
      'fetchedItemInfo'
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