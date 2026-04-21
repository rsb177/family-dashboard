from fastapi.testclient import TestClient


def test_get_layout_returns_default_when_empty(client: TestClient) -> None:
    response = client.get("/api/layout")
    assert response.status_code == 200
    data = response.json()
    assert len(data) == 4
    types = {item["type"] for item in data}
    assert types == {"calendar", "weather", "todo", "countdown"}


def test_get_layout_returns_stored_config_after_save(client: TestClient) -> None:
    layout = [
        {"i": "weather", "type": "weather", "x": 0, "y": 0, "w": 4, "h": 2}
    ]
    client.put("/api/layout", json=layout)
    response = client.get("/api/layout")
    assert response.status_code == 200
    assert response.json() == layout


def test_put_layout_saves_and_returns(client: TestClient) -> None:
    layout = [
        {"i": "calendar", "type": "calendar", "x": 0, "y": 0, "w": 8, "h": 4},
        {"i": "weather", "type": "weather", "x": 8, "y": 0, "w": 4, "h": 2},
    ]
    response = client.put("/api/layout", json=layout)
    assert response.status_code == 200
    assert response.json() == layout


def test_put_layout_invalid_type_returns_422(client: TestClient) -> None:
    layout = [
        {"i": "foo", "type": "invalid_widget", "x": 0, "y": 0, "w": 4, "h": 2}
    ]
    response = client.put("/api/layout", json=layout)
    assert response.status_code == 422
