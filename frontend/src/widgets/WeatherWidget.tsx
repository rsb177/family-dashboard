export function WeatherWidget() {
  return (
    <div className="widget widget--weather">
      {/* widget--weather adds the decorative sky-wash gradient via ::before */}
      <div className="widget__hdr">
        <div className="widget__title widget__title--weather">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <span>Weather</span>
        </div>
      </div>
      <p className="widget__meta">Weather</p>
    </div>
  )
}
