'use client'

import Link from 'next/link'
import { ArrowUpRight, Home } from 'lucide-react'
import { SiteChrome } from '@/components/site-chrome'
import { useState, useEffect } from 'react'

export default function NotFound() {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <SiteChrome>
      <main className="not-found-page">
        <div className="not-found-content">
          <div className={`error-code ${glitchActive ? 'glitch-active' : ''}`} data-text="404">
            404
          </div>
          <h1 className={`error-title ${glitchActive ? 'glitch-active' : ''}`} data-text="Página no encontrada">
            Página no encontrada
          </h1>
          <p className="error-description">
            El sistema no puede localizar el recurso solicitado. Es posible que la página haya sido movida, eliminada o nunca haya existido.
          </p>
          <div className="error-actions">
            <Link className="button-primary" href="/">
              <Home />
              Volver al inicio
            </Link>
            <Link className="text-button" href="/proyectos">
              Explorar proyectos
              <ArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="not-found-visual">
          <div className="glitch-lines">
            <div className="line line-1" />
            <div className="line line-2" />
            <div className="line line-3" />
          </div>
          <div className="error-icon mono">
            <span className="mono">ERROR_404</span>
            <span className="mono">RESOURCE_NOT_FOUND</span>
          </div>
        </div>
      </main>
    </SiteChrome>
  )
}
