'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp, ArrowUpRight, Download, Menu, Search, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { projects } from '@/lib/portfolio-data'
import { TechStack } from './tech-badge'

const links = [
  ['/', 'Inicio'],
  ['/sobre-mi', 'Sobre mí'],
  ['/proyectos', 'Proyectos'],
  ['/experiencia', 'Experiencia'],
  ['/contacto', 'Contacto'],
]

export function Mark({ small = false }: { small?: boolean }) {
  return (
    <span className={`mark ${small ? 'mark-small' : ''}`}>
      <Image
        src="/Logotipo.png"
        alt="Logotipo de Fabritcio Peña"
        width={1536}
        height={1024}
        priority={!small}
        className="logo-mark"
      />
    </span>
  )
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = searchQuery
    ? projects.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : []

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Mark small />
          <span>
            FP<span className="brand-dot">/</span>26
          </span>
        </Link>
        <nav
          className={open ? 'nav-links nav-open' : 'nav-links'}
          aria-label="Navegación principal"
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href || (href !== '/' && pathname.startsWith(href))
                  ? 'active'
                  : ''
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="header-icon-btn"
            onClick={() => setSearchOpen(true)}
            aria-label="Buscar proyectos"
            title="Buscar proyectos"
            data-tooltip="Buscar"
          >
            <Search />
          </button>
          <a
            href="/cv.pdf"
            download
            className="header-icon-btn"
            aria-label="Descargar CV"
            title="Descargar CV"
            data-tooltip="Descargar CV"
          >
            <Download />
          </a>
          <Link className="header-contact" href="/contacto">
            <span>Hablemos</span> <ArrowUpRight />
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-header">
              <input
                type="text"
                placeholder="Buscar proyectos por nombre, tecnología o descripción..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)} aria-label="Cerrar búsqueda">
                <X />
              </button>
            </div>
            <div className="search-results">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/proyectos/${p.slug}`}
                    onClick={() => setSearchOpen(false)}
                  >
                    <span className="mono">{p.type}</span>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <TechStack stack={p.stack} />
                  </Link>
                ))
              ) : searchQuery ? (
                <p className="search-empty">
                  No se encontraron proyectos que coincidan con tu búsqueda.
                </p>
              ) : (
                <p className="search-empty">Escribe para buscar proyectos...</p>
              )}
            </div>
          </div>
        </div>
      )}

      {children}

      <footer className="site-footer">
        <div className="footer-top section-wrap">
          <div className="footer-brand">
            <Link className="brand" href="/" onClick={() => setOpen(false)}>
              <Mark small />
              <span>
                FP<span className="brand-dot">/</span>26
              </span>
            </Link>
            <p className="footer-tagline">
              Tecnología que resuelve problemas reales. Desarrollo web, soporte TI y
              automatización con foco en las personas.
            </p>
            <Link className="footer-cta" href="/contacto">
              Hablemos <ArrowUpRight />
            </Link>
          </div>

          <nav className="footer-nav" aria-label="Navegación del pie de página">
            <span className="mono">/ NAVEGACIÓN</span>
            {links.map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="footer-contact">
            <span className="mono">/ CONTACTO</span>
            <a href="mailto:configurar@email.com">configurar@email.com</a>
            <Link href="/contacto">Formulario de contacto</Link>
            <span className="footer-status">
              <i /> Disponible para proyectos
            </span>
          </div>
        </div>

        <div className="footer-bottom section-wrap">
          <span className="mono">© 2026 FABRITCIO PEÑA</span>
          <span className="footer-made">TECNOLOGÍA QUE RESUELVE PROBLEMAS.</span>
          <button
            type="button"
            className="footer-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Volver arriba"
          >
            Volver arriba <ArrowUp />
          </button>
        </div>
      </footer>
    </div>
  )
}
