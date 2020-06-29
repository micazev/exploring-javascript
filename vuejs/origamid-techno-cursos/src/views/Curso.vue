<template>
  <div>
    <transition>
      <div v-if="api" class="conteudo">
        <h1>{{api.nome}}</h1>
        <p>{{api.descricao}}</p>
        <h2>Aulas</h2>
        <ul class="aulas">
          <li v-for="aula in api.aulas" :key="aula.id">
            <h3>
              <router-link to="{name: 'aula', params: {aula: aula.id}">{{api.aula}}</router-link>
            </h3>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: "curso",
  props: ["curso"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.curso}`);
  }
};
</script>

<style scoped>
.aulas li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1s);
  background: white;
  padding: 20px;
  margin: 10px;
  border-radius: 4px;
}

.aulas li a.router-link-active {
  background: #4b8;
  color: white;
}
</style>