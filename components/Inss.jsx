import { useState } from "react";
import calculaInss from "../functions/calculaInss";

export default function Inss() {
  const [salario, setSalario] = useState(0);

  return (
    <div className={`items-center`}>
      <div className={`inset-0 flex items-center justify-center`}>
      <input
        type="number"
        value={salario}
        onChange={(e) => setSalario(e.target.value)}
        className={`font-bold text-4xl text-center 
        rounded-full py-3 px-6... items-center w-1/2 md:w-full ... bg-red-300`}
      />
      </div>
      <div className={`text-center`}>
          <span className={`text-2xl`}>Valor do inss Calculado é:
          <div className={`font-bold text-3xl`}>
      {calculaInss(salario).toFixed(2)}
      </div>
      </span>
      </div>
    </div>
  );
}
