export function CountdownWidget() {
  return (
    <div className="widget">
      <div className="widget__hdr">
        <div className="widget__title widget__title--countdown">
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
            <line x1="10" y1="2" x2="14" y2="2" />
            <line x1="12" y1="14" x2="15" y2="11" />
            <circle cx="12" cy="14" r="8" />
          </svg>
          <span>Countdown</span>
        </div>
      </div>
      <p className="widget__meta">Countdown</p>
    </div>
  )
}
