import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'

interface Todos {
    id: number
    title: string
    completed: boolean
}
export const Home = () => {
    const [todos, setTodos] = useState<Array<Todos>>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const todoSelected = parseInt(event.target.id)
        const updateTodos: Array<Todos> = todos.map(todo => {
            if (todo.id === todoSelected) {
                todo.completed = checked
            }
            return todo
        })
        setTodos(updateTodos)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    return (
        <Container>
            <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                Minha Lista de Tarefas
            </Typography>
            {todos.map(todo => (
                <Box sx={{ my: 4, display: 'flex' }} key={todo.id}>
                    <Checkbox checked={todo.completed} onChange={handleChange} name={todo.title} id={todo.id.toString()} />
                    <Typography variant="h6" component="p" sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.title}
                    </Typography>
                </Box>
            ))}
        </Container>
    )
}
