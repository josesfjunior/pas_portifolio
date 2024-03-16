export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="bg-blue-500 py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold">
            José dos Santos Ferreira Júnior
          </h1>
          <p>Contato: josesfjunior06@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              className="text-blue-200 hover:underline"
              href="https://www.linkedin.com/in/josesfjunior"
            >
              linkedin.com/in/josesfjunior
            </a>
          </p>
          <p>
            Github:{" "}
            <a
              className="text-blue-200 hover:underline"
              href="https://github.com/josesfjunior"
            >
              github.com/josesfjunior
            </a>
          </p>
        </div>
      </header>
      <main className="container mx-auto flex-grow px-4 py-8">
        <section id="about" className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Sobre Mim</h2>
          <p>Programação web voltada a Back-end e Data Mining.</p>
        </section>

        <section id="education" className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Educação</h2>
          <p>Sistemas de Informação - CESMAC (1º ao 5º período)</p>
          <p>
            Análise e Desenvolvimento de Sistemas - UNIT (5º e último período)
          </p>
        </section>

        <section id="experience" className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">
            Experiência Profissional
          </h2>
          <p>Brate (Desde outubro de 2022)</p>
          <p>Função: Programador Full-Stack</p>
          <p>Responsabilidades:</p>
          <ul className="list-disc pl-4">
            <li>
              Desenvolvimento e manutenção de sistemas utilizando Elixir,
              Phoenix, C e C++
            </li>
            <li>Gerenciamento de redes e sistemas UNIX</li>
          </ul>
        </section>

        <section id="projects" className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Projetos</h2>
          <p>
            StockSide (Projeto Principal): Plataforma para operar nas bolsas de
            valores.
          </p>
          <p>
            Pop Saúde: Aplicativo para informativos de procedimentos médicos.
          </p>
          <p>RxADVERT: Refatoração de aplicação Reactjs para Flutter.</p>
        </section>

        <section id="skills" className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Habilidades</h2>
          <ul>
            <li>Linguagens: Swift, Python, JavaScript (Node.js), Elixir</li>
            <li>Frameworks: Phoenix (Elixir), React.js, Flutter</li>
            <li>Banco de Dados: SQL (PostgreSQL, MySQL)</li>
            <li>Sistemas Operacionais: UNIX</li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-800 py-4 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 José dos Santos Ferreira Júnior</p>
        </div>
      </footer>
    </div>
  );
}
