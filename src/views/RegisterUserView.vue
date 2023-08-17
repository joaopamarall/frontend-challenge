<template>
  <div class="row">
      <div class="col-6 logo">
          <h1>Logo Aqui</h1>
      </div>
      <div class="col-6 cadastro">
          <h1>TESTE</h1>
          <p class="subtitulo">EGS SISTEMAS</p>
          <form>
              <label for="nome">NOME</label>
              <input type="text" id="nome" placeholder="Escreva seu nome" v-model="nome" required>
              <label for="sobrenome">SOBRENOME</label>
              <input type="text" id="sobrenome" placeholder="Escreva seu sobrenome" v-model="sobrenome" required>
              <label for="data-nascimento">IDADE</label>
              <input type="text" id="data-nascimento" placeholder="00/00/0000" v-model="dataNascimento" required>
              <label for="email">E-MAIL</label>
              <input type="email" id="email" placeholder="Escreva seu e-mail" v-model="email" required>
              <label for="cpf">CPF</label>
              <input type="text" id="cpf" placeholder="000.000.000-00" v-model="cpf" required>
              <div class="checkbox">
                  <input type="checkbox" required>
                  <label>Aceito os termos e condições</label>
              </div>
              <button @click="adicionarNovoUsuario">ENVIAR</button>
          </form>
              <p><u>I'm already a member</u></p>
      </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
          items: [{
              nome:'',
              sobrenome:'',
              dataNascimento:'',
              email:'',
              cpf:'',
          }]
      }
  },
}
</script>

<style>
.logo {
  padding: 0;
  margin: 0 auto;
  background: linear-gradient(to right, #7afd92bc, #00f2ff);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cadastro {
  padding: 0;
  margin: 0 auto;
  background-color: #30435d;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}
.subtitulo {
  color: aqua;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
}
label {
  font-size: small;
  margin-bottom: 4px;
}
input {
  background: none;
  border: 1px solid rgb(119, 131, 176);
  margin-bottom: 24px;
  padding: 4px;
}
input::placeholder {
  color: rgb(155, 165, 203);
}
button {
  border: none;
  background-color: rgb(70, 255, 206);
  color: white;
}
</style>
