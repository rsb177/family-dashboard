# Family Dashboard

A widget-based family dashboard for shared household visibility. Displays Google Calendar events, grocery lists from Microsoft To Do, countdown timers, and weather — all in one place.

## Tech Stack

- **Backend:** Python 3.13 / FastAPI / uv
- **Frontend:** React 19 / TypeScript / Vite
- **Database:** SQLite (countdown data)
- **Reverse proxy:** Caddy (automatic HTTPS)

## Getting Started

### Prerequisites

- Docker Desktop with WSL integration enabled
- `make`

### Development

```bash
cp .env.example .env   # fill in your API keys and secrets
make build             # build all images (first run only)
make dev               # start the stack with hot reload
```

The app is available at `http://localhost`.

### Environment Variables

Copy `.env.example` to `.env` and fill in the values:

| Variable | Description |
|----------|-------------|
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth app credentials |
| `MS_CLIENT_ID` / `MS_CLIENT_SECRET` | Microsoft Graph OAuth credentials |
| `OPENWEATHER_API_KEY` | OpenWeatherMap API key |
| `SECRET_KEY` | App secret key for session signing |

## Commands

```bash
make dev          # Start dev stack (hot reload)
make build        # Build all Docker images
make prod         # Start production stack (detached)
make down         # Stop all containers
make logs         # Tail container logs
make lint         # Run ruff + eslint
make format       # Run ruff format + prettier
make typecheck    # Run mypy + tsc
make test         # Run pytest
```

## Widgets

- [ ] Google Calendar
- [ ] Microsoft To Do (grocery lists)
- [ ] Countdown timers (events, birthdays, etc.)
- [ ] Weather (OpenWeatherMap)

## License

[PolyForm Noncommercial 1.0](https://polyformproject.org/licenses/noncommercial/1.0.0/) — free for personal use; commercial use prohibited.
