import { Link } from 'react-router-dom'
import { DashboardGrid } from '../components/DashboardGrid'
import { useLayout } from '../hooks/useLayout'

export function DashboardPage() {
  const { layout, loading, error } = useLayout()

  if (loading) return <div style={{ padding: 32 }}>Loading...</div>
  if (error) return <div style={{ padding: 32 }}>Failed to load layout</div>

  return (
    <div>
      <DashboardGrid layout={layout} />
      <Link
        to="/settings"
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          fontSize: 24,
          textDecoration: 'none',
        }}
        title="Layout settings"
      >
        ⚙
      </Link>
    </div>
  )
}
