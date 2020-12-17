<template>
  <div class="app">
    <!--<registroUsario/>-->
    <!--<ingresoUsuario/>-->
    <!--<administrador/>-->
    <!--<indexhome/>-->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Hotel Nombre</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
        </ul>
        
      </div>
    </nav>

    <router-view></router-view>
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
  background: #f0f0f0;
  
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
