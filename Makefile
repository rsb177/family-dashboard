.DEFAULT_GOAL := help

dev: ## Start dev environment (uses docker-compose.override.yml automatically)
	docker compose up

build: ## Build all images
	docker compose build

prod: ## Start production environment
	docker compose -f docker-compose.yml up -d

down: ## Stop all containers
	docker compose down

logs: ## Tail logs
	docker compose logs -f

lint: ## Run all linters
	docker compose run --rm backend ruff check src/
	docker compose run --rm frontend npm run lint

format: ## Format all code
	docker compose run --rm backend ruff format src/
	docker compose run --rm frontend npm run format

typecheck: ## Run type checkers
	docker compose run --rm backend mypy src/
	docker compose run --rm frontend npm run typecheck

test: ## Run all tests
	docker compose run --rm backend pytest

shell-backend: ## Open a shell in the backend container
	docker compose run --rm backend bash

shell-frontend: ## Open a shell in the frontend container
	docker compose run --rm frontend sh

install-hooks: ## Install pre-commit hooks
	pre-commit install

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'
