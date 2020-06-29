<template>
  <div>
    <transition>
      <div class="conteudo">
        <div>
          <h1>Sobre a {{api.titulo}}</h1>
          <p>{{api.descricao}}</p>
          <router-link tag="button" class="btn-cursos" to="/cursos">Cursos</router-link>
          <div>
            <h2>Avaliações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{avaliacao.nome}}</p>
                <p>{{avaliacao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/img-home.png" alt="aprenda web design" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
export default {
  name: "Home",
  mixins: [fetchData],
  created() {
    this.fetchData("home");
  }
};
</script>

<style>
.btn-cursos {
  background: #4b8;
  letter-spacing: 1px;
  padding: 15px 40px;
  font-size: 1rem;
  color: white;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin: 10px 0 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Helvedica, Arial, sans-serif;
}
.flex {
  display: flex;
}

.img-init {
  width: 40%;
  padding: 50px;
}
img {
  max-width: 100%;
}
</style>