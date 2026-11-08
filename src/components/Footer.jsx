const instagramUrl = 'https://www.instagram.com/lukescripts/'

export default function Footer() {
  return (
    <footer className="footer">
      <a
        className="footer__instagram"
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram de @lukescripts"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle className="footer__instagram-ponto" cx="17.5" cy="6.5" r="1" />
        </svg>
      </a>
      <p className="footer__credito">
        Produzido por <a href={instagramUrl} target="_blank" rel="noreferrer">@lukescripts</a>
      </p>
    </footer>
  )
}
