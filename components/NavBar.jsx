export default function NavBar() {
  return (
    <div className={`flex mt-0 bg-blue-50 shadow-lg h-10 content-evenly`}>

      <nav className={`mt-0`}>
        <ul className={`flex`}>
          <li className={`mr-4`}>
            <a className={`inline-block border border-blue-50 rounded hover:border-gray-200 text-gray-600 hover:bg-gray-200 py-1 px-3`} href="./">Página inicial</a>
          </li>
          <li className={`mr-3`}>
            <a className={`inline-block border border-blue-50 rounded hover:border-gray-200 text-gray-600 hover:bg-gray-200 py-1 px-3`} href="#">Sobre</a>
          </li>
          <li className={`mr-3`}>
            <a className={`inline-block border border-blue-50 rounded hover:border-gray-200 text-gray-600 hover:bg-gray-200 py-1 px-3`} href="#">Contato</a>
          </li>
          <li className={`mr-3`}>
            <a className={`inline-block border border-blue-50 rounded hover:border-gray-200 text-gray-600 hover:bg-gray-200 py-1 px-3`} href="./ferramentas">Ferramentas</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
