import { useEffect } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import { useTodos } from '../../hooks/useTodos'

export const Home = () => {
    const { isLoading, todos, getTodos, updateTodos } = useTodos()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const todoSelected = parseInt(event.target.id)
        updateTodos(todoSelected, checked)
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <Container>
            <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                Minha Lista de Tarefas
            </Typography>
            {!isLoading &&
                todos.length > 0 &&
                todos.map(todo => (
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
