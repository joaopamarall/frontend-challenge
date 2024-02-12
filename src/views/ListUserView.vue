<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <img
          src="../assets/logo.png"
          class="header-logo"
          @click="$router.push('/')"
        />
        <div v-if="nomeCompleto">{{ nomeCompleto }}</div>
      </div>
    </div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>NOME</th>
            <th>SOBRENOME</th>
            <th>DATA</th>
            <th>E-MAIL</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listUser" :key="index">
            <td>{{ item.nome }}</td>
            <td>{{ item.sobrenome }}</td>
            <td>{{ item.dataNascimento }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.cpf }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    listUser() {
      return this.$store.state.listUser;
    },
    nomeCompleto() {
      const users = this.$store.state.listUser;
      if (users.length > 0) {
        const lastUser = users[users.length - 1];
        return lastUser.nome + " " + lastUser.sobrenome;
      } else {
        return "Nenhum usuário cadastrado";
      }
    },
  },
};
</script>
<style scoped>
.header {
  background-color: aqua;
  padding: 24px 0;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-logo {
  max-height: 10vh;
  max-width: 10vh;
}
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.table th {
  background-color: #102d41;
  padding: 10px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  color: #fff;
}

/* Estilizando as células da tabela */
.table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
</style>
