<template>
  <div> 
    <!--<registroUsario/>-->
    <ingresoUsuario/>
  </div>
</template>

<script>
import registroUsario from "./components/registro_de_usario";
import ingresoUsuario from "./components/ingreso_de_usuario";
export default {
  name: "App",
  components: {
    registroUsario,
    ingresoUsuario,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
