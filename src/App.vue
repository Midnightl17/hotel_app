<template>
  <div class="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Inicio</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
    <!--<registroUsario/>-->
    <!--<ingresoUsuario/>-->
    <!--<administrador/>-->
    <!--<indexhome/>-->
  </div>
</template>

<script>
import registroUsario from "./components/registro_de_usuario";
import ingresoUsuario from "./components/ingreso_de_usuario";
import administrador from "./components/admi";
import indexhome from "./components/home";

export default {
  name: "App",
  components: {
    registroUsario,
    ingresoUsuario,
    administrador,
    indexhome,
  },

  
};
</script>

<style>
body {
  background: #023047;
  background: linear-gradient(to right, #caf0f8, #00b4d8);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
