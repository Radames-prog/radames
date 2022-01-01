import { useState } from "react";
import salarioMinuto from "../functions/calcularHorasExtras"
import Title from "./Title";

export default function HoraExtra(){
const [salario, setSalario] = useState(1100);
const [horasExtras, setHorasExtras] = useState(1); 
const [minutosExtras, setMinutosExtras] = useState(0);
const [horasMes, setHorasMes] = useState(220);
const [minutosMes, setMinutosMes] = useState(0);
const [percentual, setPercentual] = useState(50);
    return (
    
    <div className={`max-w-lg mx-12 w-full bg-indigo-600`}>
  <Title title={"Calculadora de Horas Extras"}/>
        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0`} >
        <label className={`block text-gray-700 text-sm font-bold mb-2`}>
        Remuneração
      </label>
        <input
        type="number"
        value={salario}
        onChange={(e) => setSalario(e.target.value)}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        placeholder="Informe a remuneração"
      />
        </div>

        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
        <label className={`block text-gray-700 text-sm font-bold mb-2`} >
        Horas no Mês
      </label>
        <input
        type="number"
        value={horasMes}
        onChange={(e) => setHorasMes(e.target.value)}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        placeholder="Horas trabalhadas no mês"
      />
        </div>

        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
        <label className={`block text-gray-700 text-sm font-bold mb-2`}>
        Minutos Mensal
      </label>
        <input
        type="number"
        value={minutosMes}
        onChange={(e) => setMinutosMes(e.target.value)}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        placeholder="Minutos no mês"
      />
        </div>

        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
        <label className={`block text-gray-700 text-sm font-bold mb-2`}>
        Horas Extras
      </label>
        <input
        type="number"
        value={horasExtras}
        onChange={(e) => setHorasExtras(e.target.value)}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        placeholder="Horas Extras"
      />
        </div>

        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
        <label className={`block text-gray-700 text-sm font-bold mb-2`}>
        Minutos Extras
      </label>
        <input 
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        placeholder="Minutos Extras"
        type="number"
        value={minutosExtras}
        onChange={(e) => setMinutosExtras(e.target.value)}

        
      />
        </div>

        <div className={`w-full md:w-1/2 px-3 mb-6 md:mb-0`}>
        <label className={`block text-gray-700 text-sm font-bold mb-2`}>
        Percentual
      </label>
        <input
        type="number"
        value={percentual}
        onChange={(e) => setPercentual(e.target.value)}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        placeholder="Informe o pecentual 50 100 60 75 ou 80"
      />
      <div className={`text-2xl`}>
          <h2>Resultado Horas Extras: </h2>
          {salarioMinuto(salario, horasExtras, minutosExtras, horasMes, minutosMes, percentual)}
      </div>
      
        </div>
        <h1></h1>
    </div>
    
    )
}