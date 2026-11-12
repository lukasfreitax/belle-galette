import './Pagina.css'

// RF-009: apresentação da marca. Texto PROVISÓRIO, a ser fornecido pela cliente.
export default function Sobre() {
  return (
    <section className="pagina">
      <p className="selo">Sobre a Belle</p>
      <h1 className="pagina__titulo">Belle Galette Pâtisserie</h1>
      <p className="pagina__texto">
        Na Belle Galette, Gisele Canalli transforma sua paixão pela confeitaria francesa e pela panificação em criações artesanais que unem técnica, delicadeza e amor em cada detalhe, tornando cada sabor uma experiência especial.
      </p>
    </section>
  )
}
