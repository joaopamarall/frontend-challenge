<template>
  <div class="row">
      <div class="col-md-6 d-md-flex d-none logo">
        <img src="../assets/logo.png" class="header-logo">
      </div>
      <div class="col-md-6 col-12 cadastro">
          <h1>TESTE</h1>
          <p class="subtitulo">EGS SISTEMAS</p>
          <form>
              <label for="nome">NOME</label>
              <input type="text" id="nome" placeholder="Escreva seu nome" v-model="formData.nome" required>
              <label for="sobrenome">SOBRENOME</label>
              <input type="text" id="sobrenome" placeholder="Escreva seu sobrenome" v-model="formData.sobrenome" required>
              <label for="data-nascimento">IDADE</label>
              <input type="text" id="data-nascimento" placeholder="00/00/0000" v-model="formData.dataNascimento" required>
              <label for="email">E-MAIL</label>
              <input type="email" id="email" placeholder="Escreva seu e-mail" v-model="formData.email" required>
              <label for="cpf">CPF</label>
              <input type="text" id="cpf" placeholder="000.000.000-00" v-model="formData.cpf" required>
              <div class="checkbox">
                  <input type="checkbox" v-model="aceitarTermos" required>
                  <label>Aceito os termos e condições</label>
              </div>
              <button @click="addUser">ENVIAR</button>
          </form>
              <p><u>I'm already a member</u></p>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        nome:'',
        sobrenome:'',
        dataNascimento:'',
        email:'',
        cpf:'',
      },
      aceitarTermos:false
    }
  },
  methods: {
    addUser() {
      if (
        this.formData.nome &&
        this.formData.sobrenome &&
        this.formData.dataNascimento &&
        this.formData.email &&
        this.formData.cpf &&
        this.aceitarTermos
      ) {
        this.$store.commit('addNewUser', this.formData);
        this.$router.push('/lista-usuario');
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    }
  }
}
</script>

<style scoped>
.logo {
  padding: 0;
  margin: 0 auto;
  background: linear-gradient(to right, #7afd92bc, #00f2ff);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-logo {
    max-height: 20vh;
    max-width: 20vh;
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
.checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 10px;
}
.checkbox input {
  margin-bottom: 0;
}
button {
  border: none;
  background-color: rgb(70, 255, 206);
  color: white;
  margin-bottom: 12px;
}
</style>
