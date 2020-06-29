<template>
  <div>
    <h1>Exercícios de Transition</h1>
    <button @click="modalAtivo = !modalAtivo">Cadastre-se</button>
    <transition name="modal">
      <div class="modal-wrapper" v-show="modalAtivo" @click="clickFora">
        <div class="modal">
          <h2>Cadastre-se</h2>
          <form action>
            <label for="email">Email</label>
            <input name="email" id="email" type="email" />
            <label for="password">Senha</label>
            <input name="password" id="password" type="password" />
            <input type="submit" value="logar" />
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalAtivo: false
    };
  },
  methods: {
    clickFora({ currentTarget, target }) {
      //current target e target sao parte do event. vamos desustruturar ele usando {}
      if (currentTarget === target) this.modalAtivo = false;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  margin: 0 0 20px 0;
}

/* FUNDO  */
.modal-wrapper {
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  overflow: scroll;
}

/* CAIXINHA  */
.modal {
  background: #e5e5e5;
  padding: 20px;
  border-radius: 4px;
  max-width: 400px;
  margin: 120px auto 0 auto;
  z-index: 99;
}

.modal-enter-to .modal {
  animation: slide 0.3s;
}

.modal-leave-to .modal {
  animation: slide 0.3s reverse;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="submit"],
button {
  max-width: 200px;
  background: #84e;
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

input[type="submit"]:active,
button:active {
  background: #94e;
}

button {
  margin: 20px auto;
  display: block;
  cursor: pointer;
}

input,
button {
  width: 100%;
  border: 2p solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 15px 10px;
  font-size: 1rem;
  margin-bottom: 20px;
}

.modal-enter,
.model-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-to {
  transition: opacity 0.3s;
}

@keyframes slide {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>