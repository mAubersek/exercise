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


def get_users():
    return users


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
