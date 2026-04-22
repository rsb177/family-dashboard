import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DashboardGrid } from '../components/DashboardGrid'
import { useLayout, type LayoutItem } from '../hooks/useLayout'

export function SettingsPage() {
  const { layout, loading, saveLayout } = useLayout()
  const [draft, setDraft] = useState<LayoutItem[]>([])
  const [saveError, setSaveError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const initialized = useRef(false)

  useEffect(() => {
    if (layout.length > 0 && !initialized.current) {
      setDraft(layout)
      initialized.current = true
    }
  }, [layout])

  async function handleSave() {
    setSaving(true)
    setSaveError(null)
    try {
      await saveLayout(draft)
    } catch {
      setSaveError('Failed to save. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div style={{ padding: 32 }}>Loading...</div>

  return (
    <div className="dash">
      <div className="edit-toolbar">
        <Link to="/" className="btn btn--ghost">
          ← Dashboard
        </Link>
        <h2>Layout Settings</h2>
        <button className="btn btn--primary" onClick={handleSave} disabled={saving}>
          {saving ? 'Saving…' : 'Save'}
        </button>
        {saveError && (
          <span className="meta" role="alert">
            {saveError}
          </span>
        )}
      </div>
      <DashboardGrid layout={draft} editable onLayoutChange={setDraft} />
    </div>
  )
}
