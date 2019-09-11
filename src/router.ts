import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const MovieDetail = () => import(/* webpackChunkName: "MovieDetail" */ './views/MovieDetail.vue');
const StartDetail = () => import(/* webpackChunkName: "StartDetail" */ './views/StartDetail.vue');
const SmallComment = () => import(/* webpackChunkName: "SmallComment" */ './views/SmallComment.vue');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
      },
    },
    {
      path: '/movieDetail/:id',
      name: 'movieDetail',
      component: MovieDetail,
      meta: {
        title: '电影详情',
      },
    },
    {
      path: '/startDetail/:id',
      name: 'startDetail',
      component: StartDetail,
      meta: {
        title: '明星详情',
      },
    },
    {
      path: '/smallComment/:id',
      name: 'smallComment',
      component: SmallComment,
      meta: {
        title: '评论',
      },
    },
  ],
});
