import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'
import AskItem from '../views/AskItem.vue'
import List from '../components/ListItem.vue'
import {store} from '../store/index.js'
import bus from '../utills/bus.js'


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: List,
      beforeEnter(to, from, next) {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
            bus.$emit('end:spinner');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: List,
      beforeEnter(to, from, next) {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
            bus.$emit('end:spinner');
            
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: List,
      beforeEnter(to, from, next) {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
            bus.$emit('end:spinner');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    {
      path: '/user/:id',
      component: User,
      beforeEnter(to, from, next) {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_USER', to.params.id)
          .then(() => {
            next();
            bus.$emit('end:spinner');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    {
      path: '/item/:id',
      component: AskItem,
      beforeEnter(to, from, next) {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_ITEM', to.params.id)
          .then(() => {
            next();
            bus.$emit('end:spinner');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  ]
});