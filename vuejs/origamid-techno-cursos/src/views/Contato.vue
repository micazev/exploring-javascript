<template>
  <transition>
    <div>
      <h1>Contato</h1>
      <div>
        <p>{{api.descricao}}</p>
        <p>
          <b>Telefone:</b>
          {{api.contato.telefone}}
        </p>
        <p>
          <b>Emai:</b>
          {{api.contato.email}}
        </p>
        <p>
          <b>Endereço:</b>
          {{api.contato.endereco}}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "Contato",
  mixins: [fetchData],
  created() {
    this.fetchData("contato");
  }
};
</script>

<style>
</style>