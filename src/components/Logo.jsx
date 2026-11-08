const logoSrc = import.meta.env.BASE_URL + 'images/logo-belle-galette.png'

export default function Logo({ className = '' }) {
  const classes = ['logo', className].filter(Boolean).join(' ')
  return <img className={classes} src={logoSrc} alt="Belle Galette Pâtisserie" />
}
