<template>
<div class="row">
  <img src="https://i.pinimg.com/564x/de/f7/b6/def7b694904830d5804ee5975b69e9ed.jpg" alt=""/>

<form action="/my-handling-form-page" method="post">
 <ul>
  <div style="width: 70%">
    
    <label for="mail">Correo electrónico:</label>
      <input type="email" id="mail" name="user_mail">
   </div>
  <br>
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="user_name">
  <br/>
  <br/>
    <label for="apellido">Apellido:</label>
    <input type="text" id="apellido" name="user_apellido">
  <br/>
  <br/>
    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="user_edad">
  <br/>
  <br/>
    <label for="contraseña">Contraseña:</label>
    <input type="password" id="contraseña" name="user_contraseña">
  <br/>
  <br/>
    <label for="telefono">Telefono:</label>
    <input type="number" id="telefono" name="user_telefono">
  <br/>

  <br/>
    <label for="direccion">Direccion:</label>
    <input type="text" id="direccion" name="user_direccion">
  <br/>
  <div>
    <label for="idioma">Idioma:</label>
    <select name="my_html_select_box">
      <option>Español </option>
      <option>Inglés</option>
      <option>Portugués</option>
      <option>Francés</option>
    </select>
  </div>
  <li class="button">
    <button type="submit">Registrarse</button>
  </li>
 </ul>
</form>
</div>
</template>

<script>
export default {};
</script>

<style>
img {
  padding-left: 800px;
}

form {
  /* Centrar el formulario en la página */
  margin: 0 auto;
  width: 600px;
  /* Esquema del formulario */
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

label {
  /* Tamaño y alineación uniforme */
  display: inline-block;
  width: 200px;
  text-align: right;
}

input,
textarea {
  /* Para asegurarse de que todos los campos de texto tienen la misma configuración de letra
     Por defecto, las áreas de texto tienen un tipo de letra monoespaciada */
  font: 1em sans-serif;

  /* Tamaño uniforme del campo de texto */
  width: 200px;
  box-sizing: border-box;

  /* Hacer coincidir los bordes del campo del formulario */
  border: 1px solid #999;
}
.button {
  /* Alinear los botones con los campos de texto */
  padding-left: 90px; /* mismo tamaño que los elementos de la etiqueta */
}

button {
  /* Este margen adicional representa aproximadamente el mismo espacio que el espacio
     entre las etiquetas y sus campos de texto */
  margin-left: 12.5em;
}
</style>
