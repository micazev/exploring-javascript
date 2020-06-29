<template>
  <div>
    <button @click="estoque++">Adicionar estoque</button>
    <button @click="estoque--">Deletar estoque</button>
    <transition>
      <p v-if="estoque >= 5" key="estoque">{{estoque}} Itens em estoque</p>
      <p v-else-if="estoque >= 1 && estoque < 5" key="ultimos">Itens quase acabando</p>
      <p v-else key="esgotado">Produto fora de estoque</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estoque: 0
    };
  }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}

.v-enter,
.v-leave-to {
  transition: opacity 0;
}
</style>