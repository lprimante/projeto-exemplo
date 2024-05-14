import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { useTodos } from '../../hooks'
import { Header, ToDoList } from '../../components'

export const Home = () => {
    const { isLoading, todos, updateTodoComplete } = useTodos()
    const navigate = useNavigate()

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const todoCompleted = parseInt(event.target.id)
        updateTodoComplete(todoCompleted, checked)
    }

    const handleEdit = (id?: number) => {
        if (id) {
            navigate(`/todo/${id}`)
            return
        }
    }

    const onDelete = (id?: number) => {
        console.log(id)
        navigate(`/todo/${id}`)
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
            <Button size="large" variant="contained" color="primary" onClick={() => navigate('/adiciona-todo')} sx={{ m: 10 }}>
                {'Adicionar Nova Tarefa'}
            </Button>
            <ToDoList
                isLoading={isLoading}
                todos={todos}
                onDelete={onDelete}
                handleEdit={handleEdit}
                handleSelectChange={handleSelectChange}
            />
        </Box>
    )
}
