export default function salarioMinuto(salario, horasExtras, minutosExtras, horasMes, minutosMes, percentual){
    let horasExtrasParaMinutos = horasExtras * 60
    let totalMinutosExtras = horasExtrasParaMinutos + minutosExtras 
    let horasMesParaMinutos = horasMes * 60
    let totalMinutosMes = (horasMesParaMinutos + minutosMes)
    let salarioPorMinuto = salario / totalMinutosMes
    let salarioExtraEmMinutos = salarioPorMinuto * totalMinutosExtras
    if(percentual === 50){        
        return salarioExtraEmMinutos + (salarioExtraEmMinutos /2)
    }else if(percentual === 100){
        return salarioExtraEmMinutos + salarioExtraEmMinutos
    }else if(percentual === 60){
        return salarioExtraEmMinutos + (salarioExtraEmMinutos * 0.6)
    }else if(percentual === 75){
        return salarioExtraEmMinutos + (salarioExtraEmMinutos * 0.75)
    }else if(percentual === 80){
        return salarioExtraEmMinutos + (salarioExtraEmMinutos * 0.8)
    }else {
        return "Desculpe mas ainda não consigo calcular horas extras a "+percentual+"%"
    }
 
    
    
    
    
}

