// registrar localmente dentro de outro componente
import RelacaoDolarReal from "./RelacaoDolarReal.js";

export default {
  name: "PrevisaoTempo",
  components: {
    RelacaoDolarReal,
  },
  data() {
    return {
      valorApple: 0,
    };
  },
  template: `<div>
  <p>Valor de mercado da Apple: {{valorApple}}</p>
  <relacao-dolar-real></relacao-dolar-real>
  </div>`,
  methods: {
    fetchData() {
      fetch(
        "https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_99f2a781b39a46e7a3c850edad8093f5"
      )
        .then((r) => r.json())
        .then((r) => {
          this.valorApple = r.marketcap;
        });
    },
  },
  created() {
    this.fetchData();
  },
};
