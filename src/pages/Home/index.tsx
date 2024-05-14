import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Button from '@mui/material/Button'

import { useTodos } from '../../hooks/useTodos'
import { Header } from '../../components/Header'

import { useHistory } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export const Home = () => {
    const { isLoading, todos, updateTodoComplete } = useTodos()
    const history = useHistory()

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const todoCompleted = parseInt(event.target.id)
        updateTodoComplete(todoCompleted, checked)
    }

    const handleEdit = (id?: number) => {
        if (id) {
            history.push(`/todo/${id}`)
        }
        history.push('/adiciona-todo')
        return
    }

    const onDelete = (id?: number) => {
        console.log(id)
        history.push(`/todo/${id}`)
    }

    return (
        <Box
            sx={{
                paddingTop: 10,
                backgroundColor: '#C6DDF0',
                height: '100%',
                minHeight: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Header title={'Minha Lista de Tarefas'} />
            <Button size="large" variant="contained" color="primary" onClick={() => handleEdit()} sx={{ m: 10 }}>
                {'Adicionar Nova Tarefa'}
            </Button>
            <List>
                {isLoading && todos.length < 0 ? (
                    <CircularProgress />
                ) : (
                    todos.map(todo => (
                        <ListItem
                            sx={{
                                width: '80%',
                                margin: 'auto',
                                display: 'flex',
                                justifyContent: 'space-around',
                                border: '1px solid light-gray',
                            }}
                            key={todo.id}
                        >
                            <Checkbox
                                checked={todo.completed}
                                onChange={handleSelectChange}
                                name={todo.title}
                                id={todo.id?.toString()}
                            />
                            <Typography
                                variant="h6"
                                component="p"
                                sx={{ width: '70%', textDecoration: todo.completed ? 'line-through' : 'none' }}
                            >
                                {todo.title}
                            </Typography>
                            <Button onClick={() => handleEdit(todo.id)} variant="contained" sx={{ ml: 10 }}>
                                Editar
                            </Button>
                            <Button onClick={() => onDelete(todo.id)} color="secondary" variant="contained" sx={{ ml: 10 }}>
                                Deletar
                            </Button>
                        </ListItem>
                    ))
                )}
            </List>
        </Box>
    )
}
