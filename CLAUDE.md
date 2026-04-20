# Family Dashboard — Claude Instructions

## Project Overview

Widget-based family dashboard for shared household visibility. Python/FastAPI backend, React/TypeScript/Vite frontend, served through a Caddy reverse proxy. Runs on a home server or Raspberry Pi.

## Common Commands

```bash
make dev          # Start full dev stack (hot reload)
make build        # Build all Docker images
make prod         # Start production stack (detached)
make down         # Stop all containers
make lint         # Run ruff + eslint
make format       # Run ruff format + prettier
make typecheck    # Run mypy + tsc
make test         # Run pytest
make shell-backend  # Shell into backend container
make shell-frontend # Shell into frontend container
```

## Architecture

- **Backend:** Python 3.13 / FastAPI / uv — `backend/src/app/`
- **Frontend:** React 19 / TypeScript / Vite — `frontend/src/`
- **Reverse proxy:** Caddy — routes `/api/*` → backend:8000, `/*` → frontend
- **Database:** SQLite (countdown widget data only)
- **Auth:** OAuth tokens stored server-side (Google + Microsoft); never exposed to frontend
- **Dev:** `docker-compose.override.yml` auto-applied — source volume-mounted, hot reload enabled
- **Prod:** Multi-stage images; Caddy handles HTTPS automatically when a domain is configured

## Key Conventions

- Backend uses `src` layout: source lives in `backend/src/app/`
- `PYTHONPATH=/app/src` is set in the Dockerfile (no build system needed for imports)
- Frontend scripts: `lint`, `format`, `typecheck`, `build` all defined in `package.json`
- Secrets go in `.env` (gitignored); document new vars in `.env.example`

## Superpowers Plans & Specs

**Always save superpowers design docs and implementation plans to the Obsidian vault via the MCP server**, not to the repo. Use the path structure:

```
Coding Projects/Family Dashboard/superpowers/specs/<date>-<topic>-design.md
Coding Projects/Family Dashboard/superpowers/plans/<date>-<topic>.md
```
