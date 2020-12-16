import Vue from 'vue';
import App from './App';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import indexhome from "./components/home";
import login from "./components/ingreso_de_usuario";
import register from "./components/registro_de_usuario";
import admin from "./components/admi";

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: indexhome
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/register',
      component: register,
    },
    {
      path: '/admin',
      component: admin,
    }
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
