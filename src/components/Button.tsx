import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: 'degen' | 'vault'
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  mode,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const variantClasses = {
    primary:
      mode === 'degen'
        ? 'bg-degen-primary text-white hover:opacity-90'
        : 'bg-vault-accent text-white hover:opacity-90',
    secondary:
      mode === 'degen'
        ? 'bg-degen-surface text-degen-text border border-degen-border hover:bg-degen-border'
        : 'bg-vault-surface text-vault-text border border-vault-border hover:bg-vault-border',
    outline:
      mode === 'degen'
        ? 'border-2 border-degen-primary text-degen-primary hover:bg-degen-primary hover:text-degen-background'
        : 'border-2 border-vault-accent text-vault-accent hover:bg-vault-accent hover:text-white',
  }

  return (
    <button
      className={`font-semibold rounded-lg transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
