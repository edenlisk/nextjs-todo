type Todo = {
    id: String,
    title: String,
    date: String,
    description: String,
    isCompleted: Boolean
}

type User = {
    id: String,
    username: String,
    todos: Todo[]
}
export const user: User = {
    "id": "6636a2b18e3d54132f02d5fa",
    "username": "edenlisk",
    "todos": [
        {
            "id": "6636a685fd4486b5ef881a52",
            "title": "Programming in flutter",
            "date": "2024-05-04",
            "description": "To complete Flutter navigation app",
            "isCompleted": false
        },
        {
            "id": "6636a685fd4486b5ef881a52",
            "title": "Class work",
            "date": "2024-05-04",
            "description": "Complete Mathematics homework",
            "isCompleted": false
        },
        {
            "id": "6636a685fd4486b5ef881a52",
            "title": "Job application",
            "date": "2024-05-04",
            "description": "Submit the job application",
            "isCompleted": false
        },
        {
            "id": "6636a685fd4486b5ef881a52",
            "title": "Programming in flutter",
            "date": "2024-05-04",
            "description": "To complete Flutter navigation app",
            "isCompleted": false
        },
    ]
}

export const comment: { id: String, message: String } = {
    "id": "6637dd169bef01898a071c82",
    "message": "I am missing Google Map API"
}