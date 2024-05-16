import { useNavigate } from 'react-router-dom'
import { useTodos } from '../../hooks'
import { Header, ToDoList, Button } from '../../components'
import { Box, CircularProgress } from '@mui/material'

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

    const handleClick = () => {
        navigate('/adiciona-todo')
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
            <Button onClick={handleClick} text={'Adicionar Nova Tarefa'} />
            <Header title={'Minha Lista de Tarefas'} />
            {isLoading ? (
                <CircularProgress />
            ) : (
                <ToDoList todos={todos} onDelete={onDelete} handleEdit={handleEdit} handleSelectChange={handleSelectChange} />
            )}
        </Box>
    )
}
