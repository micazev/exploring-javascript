import DadosAcao from "./DadosAcao.js";

export default {
  name: "Acoes",
  data() {
    return {
      quote: {},
      acao: "",
    };
  },
  components: {
    DadosAcao,
  },
  template: `
    <div>
    <p>
      <ul>
        <li>Apple > aapl</li>
        <li>Amazon > amzn</li>
        <li>Microsoft > msft</li>
        <li>Apple > aapl</li>

      </ul>
    </p>
      <input type="text" v-model="acao" />
      <button @click="fetchData">Buscar Dados</button>
      <dados-acao :dados:"quote"></dados-acao>
    </div>
  `,
  methods: {
    fetchData(acao) {
      fetch(
        `https://cloud.iexapis.com/stable/stock/${this.acao}/quote?token=pk_99f2a781b39a46e7a3c850edad8093f5`
      )
        .then((r) => r.json())
        .then((r) => {
          this.quote = r;
        });
      console.log(
        `https://cloud.iexapis.com/stable/stock/${this.acao}/quote?token=pk_99f2a781b39a46e7a3c850edad8093f5`
      );
      console.log(this.quote);
    },
  },
};
