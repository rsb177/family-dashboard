import json
from typing import Annotated, Literal

from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import LayoutConfig

router = APIRouter()

_DEFAULT_LAYOUT = [
    {"i": "calendar", "type": "calendar", "x": 0, "y": 0, "w": 8, "h": 4},
    {"i": "weather", "type": "weather", "x": 8, "y": 0, "w": 4, "h": 2},
    {"i": "todo", "type": "todo", "x": 8, "y": 2, "w": 4, "h": 2},
    {"i": "countdown", "type": "countdown", "x": 0, "y": 4, "w": 12, "h": 3},
]


class LayoutItem(BaseModel):
    """One widget's position and size in the grid."""

    i: str
    type: Literal["calendar", "weather", "todo", "countdown"]
    x: int
    y: int
    w: int
    h: int


@router.get("/api/layout", response_model=list[LayoutItem])
async def get_layout(
    db: Annotated[Session, Depends(get_db)],
) -> list[LayoutItem]:
    """Return the saved layout, or the default if none has been saved."""
    row = db.get(LayoutConfig, 1)
    source = json.loads(row.config) if row else _DEFAULT_LAYOUT
    return [LayoutItem(**item) for item in source]


@router.put("/api/layout", response_model=list[LayoutItem])
async def save_layout(
    items: list[LayoutItem],
    db: Annotated[Session, Depends(get_db)],
) -> list[LayoutItem]:
    """Upsert the layout config."""
    config_json = json.dumps([item.model_dump() for item in items])
    row = db.get(LayoutConfig, 1)
    if row is None:
        db.add(LayoutConfig(id=1, config=config_json))
    else:
        row.config = config_json
    db.commit()
    return items
