from fastapi import FastAPI

from app.routers.layout import router as layout_router

app = FastAPI()

app.include_router(layout_router)


@app.get("/api/health")
async def health() -> dict[str, str]:
    """Health check endpoint."""
    return {"status": "ok"}
