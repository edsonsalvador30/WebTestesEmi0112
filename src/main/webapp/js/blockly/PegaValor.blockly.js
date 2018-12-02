window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.PegaValor = window.blockly.js.blockly.PegaValor || {};

/**
 * PegaValor
 */
window.blockly.js.blockly.PegaValor.Executar = function() {

  this.cronapi.screen.notify('success',this.cronapi.screen.getValueOfField("vars.CaixaLista"));
}
