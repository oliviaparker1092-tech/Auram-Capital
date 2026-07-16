import React from 'react'

interface GaugeChartProps {
  mode: 'degen' | 'vault'
  progress: number
  label: string
  target: string
  remaining: string
}

export const GaugeChart: React.FC<GaugeChartProps> = ({
  mode,
  progress,
  label,
  target,
  remaining,
}) => {
  const isDegen = mode === 'degen'
  const circleColor = isDegen ? '#8B5CF6' : '#059669'
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={isDegen ? '#27272A' : '#E5E7EB'}
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={circleColor}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dy="0.3em"
            fontSize="20"
            fontWeight="bold"
            fill={isDegen ? '#FAFAFA' : '#1F2937'}
          >
            {progress}%
          </text>
        </svg>
      </div>
      <p className="mt-4 font-bold text-lg">{label}</p>
      <p className="text-sm text-gray-400 mt-2">{target}</p>
      <p className="text-xs text-gray-500">{remaining}</p>
    </div>
  )
}
