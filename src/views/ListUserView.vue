<template>
  <div id="app">
      <div class="header">
          logo || Concatenação
      </div>
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
              <tr v-for="(item, index) in items" :key="index">
                  <td>{{ item.nome }}</td>
                  <td>{{ item.sobrenome }}</td>
                  <td>{{ item.dataNascimento }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.cpf }}</td>
              </tr>
          </tbody>
      </table>
</div>
</template>
<script>
export default {

}
</script>
