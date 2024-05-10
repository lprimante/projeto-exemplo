import { useEffect, useState } from 'react'

interface Todos {
    id: number
    title: string
    completed: boolean
}
export const Home = () => {
    const [todos, setTodos] = useState<Array<Todos>>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    return (
        <>
            {todos.map(todo => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <p>{todo.completed}</p>
                </div>
            ))}
        </>
    )
}
