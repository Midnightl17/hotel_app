<template>
  <div> 
    <registroUsario/>
  </div>
</template>

<script>
import registroUsario from "./components/registro_de_usario"
export default {
  name: "App",
  components: {
    registroUsario,
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
