import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface ChartProps {
  mode: 'degen' | 'vault'
  data: Array<{ name: string; value: number }>
  title?: string
  height?: number
}

export const Chart: React.FC<ChartProps> = ({ mode, data, title, height = 300 }) => {
  const isDegen = mode === 'degen'
  const strokeColor = isDegen ? '#8B5CF6' : '#059669'

  return (
    <div>
      {title && <h3 className="font-bold text-lg mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDegen ? '#27272A' : '#E5E7EB'}
          />
          <XAxis stroke={isDegen ? '#FAFAFA' : '#1F2937'} />
          <YAxis stroke={isDegen ? '#FAFAFA' : '#1F2937'} />
          <Tooltip
            contentStyle={{
              backgroundColor: isDegen ? '#111111' : '#FFFFFF',
              border: `1px solid ${isDegen ? '#27272A' : '#E5E7EB'}`,
              borderRadius: '8px',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            strokeWidth={2}
            dot={{ fill: strokeColor }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
