import { Link, useParams, Navigate } from 'react-router-dom'
import { categorias, buscarCategoria } from '../data/catalogo.js'
import useCarrossel from '../hooks/useCarrossel.js'
import { iconesPorNome, IconeSetaDir } from '../components/Icons.jsx'
import { Seta, Pontos, Dica } from '../components/Controles.jsx'
import Folhas from '../components/Folhas.jsx'
import './Catalogo.css'

// RF-001 / RF-002: catálogo por categoria; dentro de cada categoria, as ocasiões em carrossel (RF-005).
export default function Catalogo() {
  const { categoriaId = 'macarons' } = useParams()
  const categoria = buscarCategoria(categoriaId)
  const ocasioes = categoria?.ocasioes ?? []
  const slides = categoria
    ? [
        ...(categoria.capa ? [{ ...categoria.capa, id: 'capa-categoria', tipo: 'categoria' }] : []),
        ...ocasioes.map((ocasiao) => ({ ...ocasiao, tipo: 'ocasiao' })),
      ]
    : []
  const { indice, proximo, anterior, irPara, gestos } = useCarrossel(Math.max(slides.length, 1))

  if (!categoria) return <Navigate to="/catalogo" replace />
  const slide = slides[indice]

  return (
    <section className="catalogo">
      <div className="catalogo__topo">
        <p className="selo">Explore nossas criações</p>
        <h1 className="catalogo__titulo">{categoria.nome}</h1>
        <p className="catalogo__sub">{categoria.subtitulo}</p>

        <nav className="abas" aria-label="Categorias">
          {categorias.map((c) => {
            const Icone = iconesPorNome[c.icone]
            return (
              <Link
                key={c.id}
                to={`/catalogo/${c.id}`}
                className={`aba ${c.id === categoria.id ? 'aba--ativa' : ''}`}
                aria-current={c.id === categoria.id ? 'page' : undefined}
              >
                <Icone /><span>{c.nome}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="catalogo__vitrine" {...gestos}>
        {slide ? (
          <>
            <Seta lado="esq" onClick={anterior} rotulo="Criação anterior" />
            <Seta lado="dir" onClick={proximo} rotulo="Próxima criação" />

            <div className={`palco palco--${slide.tipo}`} key={slide.id}>
              <img className="palco__foto" src={slide.foto} alt={slide.alt ?? slide.titulo} />
              <article className="card">
                <p className="card__selo">{slide.selo}</p>
                <span className="card__linha" />
                <h2 className="card__titulo">{slide.titulo}</h2>
                <p className="card__texto">{slide.descricao}</p>
                {slide.tipo === 'categoria' ? (
                  <button type="button" className="botao" onClick={proximo}>
                    Conheça a categoria <IconeSetaDir />
                  </button>
                ) : (
                  <Link to={`/catalogo/${categoria.id}/${slide.id}`} className="botao">
                    Conhecer esta ocasião <IconeSetaDir />
                  </Link>
                )}
              </article>
            </div>
          </>
        ) : (
          <div className="vazio">
            <p className="vazio__titulo">Em breve</p>
            <p>Estamos preparando esta seção com muito carinho.</p>
          </div>
        )}
        <Folhas lado="esquerda" />
        <Folhas lado="direita" />
      </div>

      {slides.length > 0 && (
        <div className="catalogo__rodape">
          <Pontos total={slides.length} atual={indice} onEscolher={irPara} rotulo="Criação" />
          <Dica texto="Deslize para explorar as criações" onClick={proximo} />
        </div>
      )}
    </section>
  )
}
