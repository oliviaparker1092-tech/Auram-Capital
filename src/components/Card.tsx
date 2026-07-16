import React from 'react'

interface CardProps {
  mode: 'degen' | 'vault'
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ mode, children, className = '' }) => {
  const baseClass = mode === 'degen' ? 'degen-card' : 'vault-card'
  return <div className={`${baseClass} ${className}`}>{children}</div>
}
