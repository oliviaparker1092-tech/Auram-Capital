import React from 'react'

interface ProgressBarProps {
  mode: 'degen' | 'vault'
  progress: number
  label?: string
  showPercentage?: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  mode,
  progress,
  label,
  showPercentage = true,
}) => {
  const isDegen = mode === 'degen'
  const barColor = isDegen ? 'bg-degen-primary' : 'bg-vault-accent'
  const bgColor = isDegen ? 'bg-degen-surface' : 'bg-vault-border'

  return (
    <div>
      {label && <p className="text-sm font-semibold mb-2">{label}</p>}
      <div className={`w-full h-2 rounded-full overflow-hidden ${bgColor}`}>
        <div
          className={`h-full ${barColor} transition-all duration-300`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      {showPercentage && <p className="text-xs mt-1 text-gray-500">{progress.toFixed(0)}%</p>}
    </div>
  )
}
