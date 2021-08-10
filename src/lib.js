
/* ⚠️ os códigos no console são somente para alterar as cores das fontes,
   para saber mais acese: https://qastack.com.br/programming/9781218/how-to-change-node-jss-console-font-color
*/

const it = (description, cb) => {
  console.log("\x1b[37m", "----", description);
  cb();
}

const expect = (result, expected) => ({
  toBe: (expected) => {
  if(result === expected){
    console.log("\x1b[32m", "Teste Passou");
  } else {
    console.log("\x1b[31m", "Teste Falhou");
  }
},
  notToBe: (expected) => {
    if(result !== expected){
      console.log("\x1b[32m", "Teste Passou");
    } else {
      console.log("\x1b[31m", "Teste Falhou");
    }
  }
}
  
)

module.exports = {it, expect};