from typing import Union
from fastapi import FastAPI, Body
from users import get_users as fetch_users, update_user

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/users")
def get_users():
    return fetch_users()


@app.put("/users/{user_id}")
def put_user(user_id: int, user: dict = Body(...)):
    return update_user(user_id, user)
