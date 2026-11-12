import './Footer.css'

// O perfil oficial da Belle será definido depois; este endereço é provisório.
const instagramUrl = 'https://www.instagram.com/'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__ornamento" aria-hidden="true">
        <span />
        <svg viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
          <path d="M12 3v5M12 8L7 37M12 8l5 29M9.5 20h5M8 28h8M6 37h12M8 37q4-12 8 0" />
        </svg>
        <span />
      </div>

      <a
        className="footer__instagram"
        href={"https://www.instagram.com/belle_galette/"}
        target="_blank"
        rel="noreferrer"
        aria-label="Siga a Belle no Instagram"
      >
        <span>Siga a Belle no Instagram</span>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle className="footer__instagram-ponto" cx="17.5" cy="6.5" r="1" />
        </svg>
      </a>

      <p className="footer__credito">Produzido por <span>lukescripts</span></p>
    </footer>
  )
}
