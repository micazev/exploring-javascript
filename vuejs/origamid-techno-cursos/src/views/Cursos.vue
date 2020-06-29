<template>
  <transition>
    <div class="conteudo">
      <div>
        <h1>Cursos</h1>
        <p>{{api.descricao}}</p>
      </div>
      <ul>
        <li v-for="curso in api.cursos" :key="curso.id">
          <h3>
            <router-link :to="{name: 'curso', params: {curso: curso.id}}">{{curso.nome}}</router-link>
          </h3>
          <span>{{curso.totalAulas}} aulas | {{curso.horas}} horas</span>
          <p>{{curso.descricao}}</p>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "Cursos",
  mixins: [fetchData],
  created() {
    this.fetchData("cursos");
  }
};
</script>
