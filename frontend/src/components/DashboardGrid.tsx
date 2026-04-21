import GridLayout, { WidthProvider } from 'react-grid-layout'
import type { Layout } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import type { LayoutItem } from '../hooks/useLayout'
import { widgetRegistry } from '../widgets/widgetRegistry'

const ResponsiveGrid = WidthProvider(GridLayout)

interface Props {
  layout: LayoutItem[]
  editable?: boolean
  onLayoutChange?: (items: LayoutItem[]) => void
}

export function DashboardGrid({ layout, editable = false, onLayoutChange }: Props) {
  function handleLayoutChange(rglLayout: Layout[]) {
    if (!onLayoutChange) return
    const updated: LayoutItem[] = rglLayout.map((rglItem) => {
      const original = layout.find((l) => l.i === rglItem.i)!
      return { ...original, x: rglItem.x, y: rglItem.y, w: rglItem.w, h: rglItem.h }
    })
    onLayoutChange(updated)
  }

  return (
    <ResponsiveGrid
      layout={layout}
      cols={12}
      rowHeight={80}
      isDraggable={editable}
      isResizable={editable}
      onLayoutChange={editable ? handleLayoutChange : undefined}
    >
      {layout.map((item) => {
        const Widget = widgetRegistry[item.type]
        return <div key={item.i}>{Widget ? <Widget /> : <div>Unknown: {item.type}</div>}</div>
      })}
    </ResponsiveGrid>
  )
}
