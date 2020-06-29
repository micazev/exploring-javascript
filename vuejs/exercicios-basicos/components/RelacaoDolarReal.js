export default {
  name: "RelacaoDolarReal",
  data() {
    return {
      valorDolar: 0,
    };
  },
  template: `<div>Valor do Dolar / Real: {{valorDolar}}</div>`,
  methods: {
    fetchData() {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then((r) => r.json())
        .then((r) => {
          this.valorDolar = r.rates.BRL.toFixed(2);
        });
    },
  },
  created() {
    this.fetchData();
  },
};
