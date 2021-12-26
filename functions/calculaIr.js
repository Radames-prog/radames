import calculaInss from "./calculaInss"

export default function calcularIr(remuneracao){
    let inss = calculaInss()
    let quantidadeDependentes = 1
    console.log(inss)
    if((remuneracao - inss) <= 1903.98){
      return remuneracao - inss
      console.log(calcularIr())
    }else if((remuneracao - inss) >1903.98){
        return 1011001
    }
   
   
   }