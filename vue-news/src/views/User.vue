<template>
  <div>
    <UserProfile>
      <div slot="username">{{fetchedUserInfo.id}}</div>
      <small slot="time">
        {{'Joined ' + fetchedUserInfo.created}}, 
        <span slot="karma">{{fetchedUserInfo.karma}}</span>
      </small>
      
    </UserProfile>
  </div>
</template>

<script>

import UserProfile from '../components/UserProfile.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters([
      'fetchedUserInfo'
    ])
  },
}
</script>

<style>

</style>