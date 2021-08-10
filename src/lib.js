
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