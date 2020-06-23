const vm = new Vue({
  el: "#app",
  data: {
    produto: false,
    carrinho: [],
    produtos: [],
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  computed: {
    carrinhoTotal() {
      let total = 0;
      if (this.carrinho.length > 0) {
        this.carrinho.forEach((item) => {
          total += item.preco;
        });
      }
      return total;
    },
  },
  methods: {
    fetchProdutos() {
      fetch("./api/produtos.json")
        .then((r) => r.json())
        .then((r) => {
          this.produtos = r;
        });
    },
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then((r) => r.json())
        .then((r) => {
          this.produto = r;
        });
    },
    abrirModal(id) {
      this.fetchProduto(id);
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
        // smooth funciona apenas no firefox
      });
    },
    // Fechar modal quando clicar do lado de fora
    fecharModal({ target, currentTarget }) {
      // target é onde eu clico
      if (target === currentTarget) this.produto = false;
    },
  },
  adicionarItem(event) {
    this.produto.estoque--;
    const { id, nome, preco } = this.produto;
    this.carrinho.push({ id, nome, preco });
  },
  removerItem(index) {
    this.carrinho.splice(index, 1);
  },
  checarLocalStorage() {
    if (window.localStorage.carrinho) {
      this.carrinho = JSON.parse(window.localStorage.carrinho);
    }
  },
  watch: {
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    },
  },
  created() {
    this.fetchProdutos();
    this.checarLocalStorage();
  },
});
