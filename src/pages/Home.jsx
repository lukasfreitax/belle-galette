import { Link } from 'react-router-dom'
import { IconeSetaDir } from '../components/Icons.jsx'
import './Home.css'

const fotoHero = `${import.meta.env.BASE_URL}images/hero.jpg`

// RF-003: página inicial com identidade da marca e chamada para o catálogo.
export default function Home() {
  return (
    <section className="home">
      <div className="home__fundo" style={{ backgroundImage: `url(${fotoHero})` }} />
      <img className="home__foto" src={fotoHero} alt="" />
      <div className="home__veu" />

      <div className="home__conteudo">
        <p className="selo">Belle Galette Pâtisserie</p>
        <h1 className="home__titulo">Macarons<br />Franceses</h1>
        <p className="home__sub">Tradição, sabor e delicadeza<br />em cada mordida.</p>
      </div>

      <div className="home__rodape">
        <Link to="/catalogo" className="botao botao--cheio">
          Conheça nosso catálogo <IconeSetaDir />
        </Link>
      </div>
    </section>
  )
}
