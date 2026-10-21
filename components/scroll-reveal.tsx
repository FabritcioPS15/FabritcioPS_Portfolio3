'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const selector = [
  '.home-featured > .section-kicker',
  '.home-featured .projects-heading > *',
  '.home-featured .featured-project',
  '.home-featured .explore-all',
  '.home-cta > *',
  '.story > *',
  '.notes-section > div',
  '.education > *',
  '.project-catalog > .catalog-row',
  '.lab-grid > *',
  '.experience-grid .timeline > div',
  '.experience-grid .skill-group',
  '.contact-page > *',
  '.case-content .case-meta',
  '.case-content .case-copy > div',
  '.showcase-heading > *',
  '.showcase-grid > *',
  '.case-why > *',
  '.case-nav > *',
].join(',')

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!elements.length || !('IntersectionObserver' in window)) return

    const timers: number[] = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const element = entry.target as HTMLElement
          observer.unobserve(element)
          element.classList.add('is-visible')
          timers.push(
            window.setTimeout(() => {
              element.classList.remove('reveal-pending', 'is-visible')
              element.style.transitionDelay = ''
            }, 1200),
          )
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
    )

    elements.forEach((element) => {
      const { top } = element.getBoundingClientRect()
      if (top <= window.innerHeight) return

      const siblings = element.parentElement ? Array.from(element.parentElement.children) : []
      const index = Math.max(0, siblings.indexOf(element))
      element.style.transitionDelay = `${Math.min(index * 70, 210)}ms`
      element.classList.add('reveal-pending')
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      timers.forEach((timer) => window.clearTimeout(timer))
      elements.forEach((element) => {
        element.classList.remove('reveal-pending', 'is-visible')
        element.style.transitionDelay = ''
      })
    }
  }, [pathname])

  return null
}
