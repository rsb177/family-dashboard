import type { ComponentType } from 'react'
import { CalendarWidget } from './CalendarWidget'
import { CountdownWidget } from './CountdownWidget'
import { TodoWidget } from './TodoWidget'
import { WeatherWidget } from './WeatherWidget'

export const widgetRegistry: Record<string, ComponentType> = {
  calendar: CalendarWidget,
  countdown: CountdownWidget,
  todo: TodoWidget,
  weather: WeatherWidget,
}
