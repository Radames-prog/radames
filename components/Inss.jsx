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
      <div>
        <h2>Tabela inss 2022</h2>
        <div className={`w-full mb-8 overflow-hidden rounded-lg shadow-lg`}>
          <table className={`w-full`}>
            <thead>
            <tr className={`text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600`}>
              <th className={`px-4 py-3 text-center text-xl`}>Salário do contribunte</th>
              <th className={`px-4 py-3 text-center text-xl`}>Aliquota</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`px-4 py-3 border text-xl`}>Até R$ 1.100</td>
                <td className={`px-4 py-3 border text-xl`}>7,5%</td>
              </tr>
              <tr>
              <td className={`px-4 py-3 border text-xl`}>De R$ 1.100,01 a R$ 2.203,48</td>
                <td className={`px-4 py-3 border text-xl`}>9%</td>
              </tr>
              <tr>
                <td className={`px-4 py-3 border text-xl`}>De R$ 2.203,49 até R$ 3.305,22</td>
                <td className={`px-4 py-3 border text-xl`}>12%</td>
              </tr>
              <tr>
                <td className={`px-4 py-3 border text-xl`}>De R$ 3.305,23 até R$ 6.433,57</td>
                <td className={`px-4 py-3 border text-xl`}>14%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      </span>
      </div>
    </div>
  );
}
