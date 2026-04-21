import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.database import Base, get_db
from app.main import app

_TEST_DB_URL = "sqlite:///:memory:"
_engine = create_engine(_TEST_DB_URL, connect_args={"check_same_thread": False})
_TestSession = sessionmaker(autocommit=False, autoflush=False, bind=_engine)


@pytest.fixture()
def client() -> TestClient:
    """TestClient with a fresh in-memory SQLite database per test."""
    Base.metadata.create_all(bind=_engine)

    def _override_get_db():
        db = _TestSession()
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = _override_get_db
    with TestClient(app) as c:
        yield c

    Base.metadata.drop_all(bind=_engine)
    app.dependency_overrides.clear()
