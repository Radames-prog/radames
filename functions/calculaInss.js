export default function calculaInss(salario) {
  let faixa1 = 1212;
  let faixa2 = 2427.79;
  let faixa3 = 3641.69;
  let faixa4 = 7088.50;

  if (salario <= 1100) {
    return salario * 0.075;
  } else if (salario >= 1100 && salario <= 2427.79) {
    let faixas = faixa1 * 0.075;
    return (salario - faixa1) * 0.09 + faixas;
  } else if (salario >= 2427.79 && salario <= 3641.69) {
    let aliqutaFaixa1 = faixa1 * 0.075;
    let aliqutaFaixa2 = (faixa2 - faixa1) * 0.09;
    let aliqutaFaixa3 = (salario - faixa1 - (faixa2 - faixa1)) * 0.12;
    return (salario = aliqutaFaixa1 + aliqutaFaixa2 + aliqutaFaixa3);
  } else if (salario >= 3641.69 && salario <= 7088.50) {
    let aliqutaFaixa1 = faixa1 * 0.075;
    console.log(aliqutaFaixa1,"faixa1")
    let aliqutaFaixa2 = (faixa2 - faixa1) * 0.09;
    console.log(aliqutaFaixa2,"faixa2")
    let aliqutaFaixa3 = (faixa3 - (faixa2 - faixa1) - faixa1)*0.12
    console.log(aliqutaFaixa3)
    let aliqutaFaixa4 = ((salario - (faixa3 - (faixa2-faixa1)-faixa1) - (faixa2-faixa1)-faixa1))*0.14 
    console.log(aliqutaFaixa4)
    return salario = aliqutaFaixa1 + aliqutaFaixa2 + aliqutaFaixa3 + aliqutaFaixa4
  } else if(salario > faixa4) {
    let aliqutaFaixa1 = faixa1 * 0.075;
    console.log(aliqutaFaixa1,"faixa1")
    let aliqutaFaixa2 = (faixa2 - faixa1) * 0.09;
    console.log(aliqutaFaixa2,"faixa2")
    let aliqutaFaixa3 = (faixa3 - (faixa2 - faixa1) - faixa1)*0.12
    console.log(aliqutaFaixa3)
    let aliqutaFaixa4 = ((faixa4 - (faixa3 - (faixa2-faixa1)-faixa1) - (faixa2-faixa1)-faixa1))*0.14 
    console.log(aliqutaFaixa4)
    return faixa4 = aliqutaFaixa1 + aliqutaFaixa2 + aliqutaFaixa3 + aliqutaFaixa4
  }else{
      return 0
      
  }
 
}



