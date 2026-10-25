'use client'

import React from 'react'
import { FaReact, FaNodeJs, FaCss3Alt, FaPython, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiVercel, SiJavascript } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa6'
import { RiNextjsFill, RiTailwindCssFill, RiSupabaseFill } from 'react-icons/ri'
import { DiMongodb } from 'react-icons/di'
import { TbBrandVite } from 'react-icons/tb'
import { BiLogoPostgresql } from 'react-icons/bi'

export interface TechMeta {
  icon: React.ComponentType<{ className?: string }>
  label: string
  color: string
}

export const TECH_MAP: Record<string, TechMeta> = {
  react: { icon: FaReact, label: 'React', color: '#00d8ff' },
  typescript: { icon: SiTypescript, label: 'TypeScript', color: '#3178c6' },
  javascript: { icon: SiJavascript, label: 'JavaScript', color: '#f7df1e' },
  html: { icon: FaHtml5, label: 'HTML5', color: '#e34f26' },
  html5: { icon: FaHtml5, label: 'HTML5', color: '#e34f26' },
  css: { icon: FaCss3Alt, label: 'CSS3', color: '#264de4' },
  css3: { icon: FaCss3Alt, label: 'CSS3', color: '#264de4' },
  nodejs: { icon: FaNodeJs, label: 'Node.js', color: '#68a063' },
  'node.js': { icon: FaNodeJs, label: 'Node.js', color: '#68a063' },
  node: { icon: FaNodeJs, label: 'Node.js', color: '#68a063' },
  nextjs: { icon: RiNextjsFill, label: 'Next.js', color: '#ffffff' },
  'next.js': { icon: RiNextjsFill, label: 'Next.js', color: '#ffffff' },
  next: { icon: RiNextjsFill, label: 'Next.js', color: '#ffffff' },
  tailwind: { icon: RiTailwindCssFill, label: 'Tailwind CSS', color: '#38bdf8' },
  'tailwind css': { icon: RiTailwindCssFill, label: 'Tailwind CSS', color: '#38bdf8' },
  tailwindcss: { icon: RiTailwindCssFill, label: 'Tailwind CSS', color: '#38bdf8' },
  vercel: { icon: SiVercel, label: 'Vercel', color: '#ffffff' },
  supabase: { icon: RiSupabaseFill, label: 'Supabase', color: '#3ecf8e' },
  mongodb: { icon: DiMongodb, label: 'MongoDB', color: '#47a248' },
  vite: { icon: TbBrandVite, label: 'Vite', color: '#bd34fe' },
  postgresql: { icon: BiLogoPostgresql, label: 'PostgreSQL', color: '#4169e1' },
  sql: { icon: BiLogoPostgresql, label: 'SQL / PostgreSQL', color: '#336791' },
  'sql server': { icon: BiLogoPostgresql, label: 'SQL Server', color: '#cc292b' },
  python: { icon: FaPython, label: 'Python', color: '#3776ab' },
  docker: { icon: FaDocker, label: 'Docker', color: '#2496ed' },
  git: { icon: FaGitAlt, label: 'Git', color: '#f05032' },
}

export function getTechMeta(name: string): TechMeta | null {
  const normalized = name.toLowerCase().trim()
  return TECH_MAP[normalized] || null
}

export function TechTag({ name, showLabel = false }: { name: string; showLabel?: boolean }) {
  const meta = getTechMeta(name)
  const displayName = meta ? meta.label : name

  if (!meta) {
    return (
      <span className="tech-tag tech-tag-text" title={displayName}>
        <span className="tech-tag-fallback-text">{displayName}</span>
      </span>
    )
  }

  const Icon = meta.icon

  return (
    <div
      className="tech-tag"
      data-tech={displayName}
      aria-label={displayName}
      style={{ '--tech-color': meta.color } as React.CSSProperties}
    >
      <Icon className="tech-icon" />
      {showLabel && <span className="tech-label">{displayName}</span>}
      <span className="tech-tooltip" role="tooltip">
        {displayName}
      </span>
    </div>
  )
}

export function TechStack({
  stack,
  className = '',
}: {
  stack: readonly string[] | string[]
  className?: string
}) {
  return (
    <div className={`tech-stack ${className}`}>
      {stack.map((item) => (
        <TechTag key={item} name={item} />
      ))}
    </div>
  )
}
