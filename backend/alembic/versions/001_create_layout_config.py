"""create layout_config table

Revision ID: 001
Revises:
Create Date: 2026-04-21

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

revision: str = "001"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "layout_config",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("config", sa.Text, nullable=False),
    )


def downgrade() -> None:
    op.drop_table("layout_config")
