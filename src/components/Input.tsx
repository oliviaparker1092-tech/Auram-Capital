import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mode: 'degen' | 'vault'
  label?: string
  error?: string
}

export const Input: React.FC<InputProps> = ({
  mode,
  label,
  error,
  className = '',
  ...props
}) => {
  const isDegen = mode === 'degen'
  const bgColor = isDegen ? 'bg-degen-surface' : 'bg-vault-surface'
  const borderColor = isDegen ? 'border-degen-border' : 'border-vault-border'
  const textColor = isDegen ? 'text-degen-text' : 'text-vault-text'

  return (
    <div>
      {label && <label className="block text-sm font-semibold mb-2">{label}</label>}
      <input
        className={`w-full px-4 py-2 border rounded-lg ${bgColor} ${borderColor} ${textColor} focus:outline-none focus:ring-2 ${isDegen ? 'focus:ring-degen-primary' : 'focus:ring-vault-accent'} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
