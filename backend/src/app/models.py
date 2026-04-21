from sqlalchemy import Integer, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class LayoutConfig(Base):
    """Single-row table storing the dashboard layout as JSON."""

    __tablename__ = "layout_config"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    config: Mapped[str] = mapped_column(Text, nullable=False)
