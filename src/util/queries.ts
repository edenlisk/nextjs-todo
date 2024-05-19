import {ApolloClient, createHttpLink, from, gql, InMemoryCache} from "@apollo/client";

const httpLink = createHttpLink({uri: 'http://localhost:8000/graphql'});

export function createApolloClient() {
    return new ApolloClient({
        link: from([httpLink]),
        cache: new InMemoryCache()
    })
}

const apolloClient = new ApolloClient({
    link: from([httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'cache-first'
        }
    }
})

export const GET_TODOS =  gql`
    query GetTodos($userId: ID!) {
        todos(userId: $userId) {
            description
            date
            dueDate,
            isCompleted
        }
    }
`

export async function getTodos(userId: String) {
    const query = gql`
        query GetTodos($userId: ID!) {
            todos(userId: $userId) {
                title
                description
                date
                dueDate,
                isCompleted
            }
        }
    `
    const {data} = await apolloClient.query({query, variables: { userId }})
    return data.todos;
}


export const GET_TODO = gql`
    query getTodo($id: ID!) {
        todo(id: $id) {
            id,
            title,
            description,
            isCompleted,
            subTasks
        }
    }
`
export async function getTodo(id: String) {
    const query = gql`
        query getTodo($id: ID!) {
            todo(id: $id) {
                id,
                title,
                description,
                isCompleted,
                subTasks
            }
        }
    `
    const { data } = await apolloClient.query({query, variables: { id }});
    return data.todo;
}


export const CREATE_TODO = gql`
    mutation CreateTodo($inputTodo: InputTodo) {
        todo: createTodo(inputTodo: $inputTodo) {
            id,
            title,
            description,
            isCompleted,
            date
        }
    }
`

export async function createTodo({ title, description } : { title: String, description: String}) {
    const mutation = gql`
        mutation CreateTodo($inputTodo: InputTodo) {
            todo: createTodo(inputTodo: $inputTodo) {
                id,
                title,
                description,
                isCompleted,
                date
            }
        }
    `
    const { data } = await apolloClient.mutate({mutation, variables: { inputTodo: { title, description } }});
    return data.todo;
}

