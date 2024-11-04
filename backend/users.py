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
    print(select)
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

def update_user(user_id, data):
    for user in users:
        if user["id"] == user_id:
            # Update only fields provided in data
            for key, value in data.items():
                if key in user:
                    user[key] = value
            print(users)
            return user
    return None
