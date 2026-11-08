import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

// Moldura comum a todas as páginas: cabeçalho, conteúdo da rota e rodapé.
export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}
