export default {
  name: "DadosAcao",
  props: ["dados"],
  template: `
  <ul>
  <li v-for="(dado, chave) in dados" :key"dado + chave">
  {{chave}}: {{dado}}
  </li></ul>`,
};
