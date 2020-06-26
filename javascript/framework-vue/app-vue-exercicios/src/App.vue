<template>
  <div id="app">
    <h1>EXEMPLO KEEP ALIVE</h1>
    <ul>
      <li @click="abaAtiva = 'Sobre'">Sobre</li>
      <li @click="abaAtiva = 'Servicos'">Serviços</li>
      <li @click="abaAtiva = 'FormularioContato'">Contato</li>
    </ul>
    <keep-alive>
      <component :is="abaAtiva"></component>
    </keep-alive>
  </div>
</template>

<script>
import Sobre from "./components/Sobre.vue";
import Servicos from "./components/Servicos.vue";
import FormularioContato from "./components/FormularioContato.vue";

export default {
  name: "App",
  components: {
    Sobre,
    Servicos,
    FormularioContato
  },
  data() {
    return {
      abaAtiva: "Sobre"
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

li {
  padding: 20px;
}
</style>
