from typing import Union, Optional
from fastapi import FastAPI, Body
from users import get_users as fetch_users, update_user
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/users")
def get_users(limit: Optional[int] = 30, skip: Optional[int] = 0, select: Optional[str] = None):
    return fetch_users(limit=limit, skip=skip, select=select)

@app.put("/users/{user_id}")
def put_user(user_id: int, user: dict = Body(...)):
    return update_user(user_id, user)
