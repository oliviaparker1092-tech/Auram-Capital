import React, { useState } from 'react'
import { Card, Button, Input } from '@/components'
import { usePlatformStore } from '@/stores/platformStore'
import { Upload, AlertCircle } from 'lucide-react'

const CreateToken: React.FC = () => {
  const { mode } = usePlatformStore()
  const [formData, setFormData] = useState({
    name: '',
    ticker: '',
    description: '',
    targetRaise: 50000,
    image: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Token creation:', formData)
    // Handle submission
  }

  return (
    <div className="min-h-screen bg-degen-background text-degen-text py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">🚀 Create Your Token</h1>
          <p className="text-gray-400">Launch your meme token in minutes</p>
        </div>

        <Card mode="degen" className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Token Name */}
            <div>
              <Input
                mode="degen"
                label="Token Name"
                placeholder="e.g., VentureDog"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Ticker */}
            <div>
              <Input
                mode="degen"
                label="Ticker Symbol"
                placeholder="e.g., VDOG"
                maxLength={5}
                value={formData.ticker}
                onChange={(e) => setFormData({ ...formData, ticker: e.target.value })}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea
                className="w-full px-4 py-2 border border-degen-border bg-degen-surface text-degen-text rounded-lg focus:outline-none focus:ring-2 focus:ring-degen-primary"
                rows={4}
                placeholder="Describe your token..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            {/* Target Raise */}
            <div>
              <Input
                mode="degen"
                label="Target Raise (USD)"
                type="number"
                value={formData.targetRaise}
                onChange={(e) => setFormData({ ...formData, targetRaise: Number(e.target.value) })}
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold mb-2">Token Image/Emoji</label>
              <div className="border-2 border-dashed border-degen-border rounded-lg p-8 text-center hover:border-degen-primary transition-colors">
                <Upload className="mx-auto mb-2 text-gray-400" />
                <p className="text-gray-400">Upload image or paste emoji</p>
              </div>
            </div>

            {/* Warning */}
            <div className="flex gap-3 p-4 bg-yellow-500/10 border border-yellow-500/50 rounded-lg">
              <AlertCircle className="text-yellow-500 flex-shrink-0" />
              <p className="text-sm text-yellow-400">
                Make sure to follow community guidelines and avoid misleading content
              </p>
            </div>

            {/* Submit */}
            <Button mode="degen" className="w-full py-3 text-lg">
              Launch Token
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default CreateToken
