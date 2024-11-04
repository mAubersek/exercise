from fastapi import HTTPException

users = [
    {
        "id": 1,
        "firstName": "John Doe",
        "lastName": "Doe",
        "age": 30,
        "gender": "male",
        "email": "john@doe.com",
        "phone": "123-456-7890",
    },
    {
        "id": 2,
        "firstName": "Jane Doe",
        "lastName": "Doe",
        "age": 30,
        "gender": "female",
        "email": "jan@doe.com",
        "phone": "123-456-7890",
    },
    {
        "id": 3,
        "firstName": "Alice",
        "lastName": "Doe",
        "age": 30,
        "gender": "female",
        "email": "alice@doe.com",
        "phone": "123-456-7890",
    },
    {
        "id": 4,
        "firstName": "Bob",
        "lastName": "Doe",
        "age": 30,
        "gender": "male",
        "email": "bob@doe.com",
        "phone": "123-456-7890",
    },
    {
        "id": 5,
        "firstName": "Charlie",
        "lastName": "Doe",
        "age": 30,
        "gender": "male",
        "email": "charlie@doe.com",
        "phone": "123-456-7890",
    }
]


def get_users(skip, limit, select):
    if skip < 0 or limit <= 0:
        raise HTTPException(status_code=400, detail="Invalid skip or limit")

    # handles skip and limit
    paginated_users = users[skip:skip + limit]

    # counts for field total
    total_users = len(users)

    # handles select
    if select:
        fields = ["id"] + select.split(',') # includes id
        paginated_users = [
            {key: user[key] for key in fields if key in user} for user in paginated_users
        ]

    return {
        "users": paginated_users,
        "total": total_users,
        "skip": skip,
        "limit": limit
    }

def update_user(user_id: int, data: dict):
    for user in users:
        if user["id"] == user_id:
            if not data:  # Check if the body is empty
                raise HTTPException(status_code=400, detail="Request body cannot be empty")

            # Update only fields provided in data
            for key, value in data.items():
                if key in user:
                    user[key] = value
                else:
                    raise HTTPException(status_code=400, detail=f"Field '{key}' is not valid")
            return user
    raise HTTPException(status_code=404, detail="User not found")
