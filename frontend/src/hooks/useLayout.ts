import { useEffect, useState } from 'react'

export interface LayoutItem {
  i: string
  type: string
  x: number
  y: number
  w: number
  h: number
}

export function useLayout() {
  const [layout, setLayout] = useState<LayoutItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/layout')
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load layout')
        return r.json() as Promise<LayoutItem[]>
      })
      .then(setLayout)
      .catch((e: unknown) => {
        setError(e instanceof Error ? e.message : 'Unknown error')
      })
      .finally(() => setLoading(false))
  }, [])

  async function saveLayout(items: LayoutItem[]): Promise<void> {
    const r = await fetch('/api/layout', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(items),
    })
    if (!r.ok) throw new Error('Failed to save layout')
    setLayout(items)
  }

  return { layout, loading, error, saveLayout }
}
