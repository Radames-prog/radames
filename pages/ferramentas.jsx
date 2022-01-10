import Card from "../components/Card";
import Inss from "../components/Inss";
import NavBar from "../components/NavBar";
import SubTitle from "../components/Subtitle";
import Title from "../components/Title";
import HoraExtra from "../components/HoraExtra";

export default function ferramentas(){
    return(
        <div className={` h-full w-full m-0`}>
            <div>
                <NavBar/>
            </div>
            <div>
            <Title title={"Calculadora de inss 2022"}/>
            </div>
            <div>
                <SubTitle subTitle={"Informe abaixo o valor da remuneração para ser calculado o valor do INSS"} />
            </div>
            <div className={`m-10`}>                
                    <Inss/>
            </div>
            <div className={`items-center`}>
              <HoraExtra/>
            </div>
        </div>
    )
}

