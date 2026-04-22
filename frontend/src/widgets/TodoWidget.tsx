export function TodoWidget() {
  return (
    <div className="widget">
      <div className="widget__hdr">
        {/* Component backed by MS To Do; displays as grocery list */}
        <div className="widget__title widget__title--grocery">
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
            <path d="m5 11 4-7" />
            <path d="m19 11-4-7" />
            <path d="M2 11h20" />
            <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
            <path d="M4.5 15h15" />
          </svg>
          <span>Grocery list</span>
        </div>
      </div>
      <p className="widget__meta">To Do</p>
    </div>
  )
}
