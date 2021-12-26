import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import SubTitle from '../components/Subtitle'
import Title from '../components/Title'

export default function Home() {
  
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Radamés Ribeiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`fixed inset-0 container flex `}>
      <NavBar/>
      </div>
      <div className={`text-center`}>
      <Title className={`text-center`} title={"Radamés Ribeiro"}/>
      </div>
      <div>
        <SubTitle subTitle={"Como estudante constante de programação, este é um ambiente de testes para que possamos transformar ideias em realidade!!"}/>
      </div>
      

      
    </div>
  )
}
