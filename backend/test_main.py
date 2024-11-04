from fastapi.testclient import TestClient

from main import app

client = TestClient(app)

# This test file assumes that the 'users' dictionary provided in the users.py file
# serves as test data. Modifying 'users' should reflect in these tests, as they rely
# on the initial state of this dataset for validation.

# tests for update_user
def test_update_user():
    user_data = {"firstName": "UpdatedFirstName", "lastName": "UpdatedLastName"}
    response = client.put("/users/1", json=user_data)
    assert response.status_code == 200
    assert response.json()["firstName"] == "UpdatedFirstName"
    assert response.json()["lastName"] == "UpdatedLastName"

def test_update_user_empty_body():
    response = client.put("/users/1", json={})  # Empty JSON
    assert response.status_code == 400
    assert response.json() == {"detail": "Request body cannot be empty"}

def test_update_user_invalid_field():
    user_data = {"invalidField": "SomeValue"}
    response = client.put("/users/1", json=user_data)
    assert response.status_code == 400
    assert response.json() == {"detail": "Field 'invalidField' is not valid"}

def test_update_nonexistent_user():
    user_data = {"firstName": "NewName"}
    response = client.put("/users/11", json=user_data)
    assert response.status_code == 404
    assert response.json() == {"detail": "User not found"}

# tests for get users
def test_get_users_basic_pagination():
    response = client.get("/users?limit=2")  # Example endpoint `/users`
    assert response.status_code == 200
    data = response.json()
    assert len(data["users"]) == 2
    assert data["total"] == 5  # Ensure total matches users length
    assert data["skip"] == 0
    assert data["limit"] == 2

def test_get_users_with_skip():
    response = client.get("/users?skip=3&limit=2")
    assert response.status_code == 200
    data = response.json()
    assert len(data["users"]) == 2  # Users at index 3 and 4
    assert data["users"][0]["id"] == 4
    assert data["skip"] == 3
    assert data["limit"] == 2

def test_get_users_with_limit():
    response = client.get("/users?skip=0&limit=3")
    assert response.status_code == 200
    data = response.json()
    assert len(data["users"]) == 3  # Only three users returned
    assert data["limit"] == 3

def test_get_users_invalid_skip():
    response = client.get("/users?skip=-1&limit=2")
    assert response.status_code == 400
    assert response.json() == {"detail": "Invalid skip or limit"}

def test_get_users_invalid_limit():
    response = client.get("/users?skip=0&limit=0")
    assert response.status_code == 400
    assert response.json() == {"detail": "Invalid skip or limit"}

def test_get_users_select_fields():
    response = client.get("/users?skip=0&limit=2&select=firstName,age")
    assert response.status_code == 200
    data = response.json()
    assert "firstName" in data["users"][0]
    assert "age" in data["users"][0]
    assert "lastName" not in data["users"][0]
    assert "phone" not in data["users"][0]