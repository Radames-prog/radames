export default function calculaInss(salario) {
  let faixa1 = 1100;
  let faixa2 = 2203.48;
  let faixa3 = 3305.22;
  let faixa4 = 6433.57;

  if (salario <= 1100) {
    return salario * 0.075;
  } else if (salario >= 1100 && salario <= 2203.48) {
    let faixas = faixa1 * 0.075;
    return (salario - faixa1) * 0.09 + faixas;
  } else if (salario >= 2203.48 && salario <= 3305.22) {
    let aliqutaFaixa1 = faixa1 * 0.075;
    let aliqutaFaixa2 = (faixa2 - faixa1) * 0.09;
    let aliqutaFaixa3 = (salario - faixa1 - (faixa2 - faixa1)) * 0.12;
    return (salario = aliqutaFaixa1 + aliqutaFaixa2 + aliqutaFaixa3);
  } else if (salario >= 3305.22 && salario <= 6433.57) {
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

