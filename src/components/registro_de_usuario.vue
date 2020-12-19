<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xl-9 mx-auto">
          <div class="card card-signin flex-row my-5">
            <div class="card-img-left d-none d-md-flex">
              <!-- img de fondo-->
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">Registro de usuario</h5>
              <form v-on:submit.prevent="register" class="form-signin">
                <div class="form-label-group">
                  <input
                    v-model="username"
                    type="text"
                    id="inputUserame"
                    class="form-control"
                    placeholder="Username"
                    required
                    autofocus
                  />
                  <label for="inputUserame">Username</label>
                </div>

                <div class="form-label-group">
                  <input
                    v-model="nombre"
                    type="text"
                    id="inputName"
                    class="form-control"
                    placeholder="Name user"
                    required
                  />
                  <label for="inputName">Nombres</label>
                </div>

                <div class="form-label-group">
                  <input
                    v-model="apellido"
                    type="text"
                    id="inputLastname"
                    class="form-control"
                    placeholder="Lastname user"
                    required
                  />
                  <label for="inputLastname">Apellidos</label>
                </div>

                <div class="form-label-group">
                  <input
                    v-model="email"
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    required
                  />
                  <label for="inputEmail">Correo electronico</label>
                </div>

                <hr />

                <div class="form-label-group">
                  <input
                    v-model="telefono"
                    type="tel"
                    id="inputTel"
                    class="form-control"
                    placeholder="000-000-0000"
                    required
                  />
                  <label for="inputTel">Numero cel/tel</label>
                </div>

                <div class="form-label-group">
                  <input
                    v-model="edad"
                    type="number"
                    id="inputEdad"
                    class="form-control"
                    placeholder="Edad"
                    required
                  />
                  <label for="inputEdad">Edad</label>
                </div>
                
                <div class="form-label-group">
                    <select v-model="idioma" class="form-control slidioma" id="idiomas">
                      <option>Español</option>
                      <option>Inglés</option>
                      <option>Portugués</option>
                      <option>Francés</option>
                    </select>
                </div>
                
                <hr />

                <div class="form-label-group">
                  <input
                    v-model="password"
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                  <label for="inputPassword">Contraseña</label>
                </div>

                <div class="form-label-group">
                  <input
                    type="password"
                    id="inputConfirmPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                  <label for="inputConfirmPassword">Confirmar contraseña</label>
                </div>

                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Registrar
                </button>
                <a class="d-block text-center mt-2 small" href="#">Ingresar</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data: function(){
    return {
      username: "",
      nombre: "",
      apellido: "",
      email: "",
      telefono: 0,
      edad: 0,
      idioma: "",
      password: "",
    }
  },
  methods: {
    register: function(){
      let json = {
        "username": this.username,
        "nombre": this.nombre,
        "apellido": this.apellido,
        "email": this.email,
        "telefono": this.telefono,
        "edad": this.edad,
        "idioma": this.idioma,
        "password": this.password,
      };
      axios.post('http://127.0.0.1:8000/post_cliente/', json)
      .then( data =>{
        console.log(data);
        console.log(json);
      })
    }
  }
};
</script>

<style>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.card-signin {
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-img-left {
  width: 45%;
  /* Link to your background image using in the property below! */
  background: scroll center
    url("https://www.hotelresb2b.com/images/hoteles/896798_foto_2.jpg");
  background-size: cover;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 0.8rem;
}

.slidioma {
  height: auto;
  border-radius: 0.8rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}
</style>
