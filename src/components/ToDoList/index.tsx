import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import CircularProgress from '@mui/material/CircularProgress'
import { TodosType } from 'src/typings'
import Button from '@mui/material/Button'

interface ToDoListProps {
    isLoading: boolean
    todos: Array<TodosType>
    onDelete: (id?: number) => void
    handleEdit: (id?: number) => void
    handleSelectChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

export const ToDoList = ({ isLoading, todos, handleSelectChange, handleEdit, onDelete }: ToDoListProps) => {
    return (
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
                        key={todo?.id}
                    >
                        <Checkbox
                            checked={todo?.completed}
                            onChange={handleSelectChange}
                            name={todo?.title}
                            id={todo?.id?.toString()}
                        />
                        <Typography
                            variant="h6"
                            component="p"
                            sx={{ width: '70%', textDecoration: todo?.completed ? 'line-through' : 'none' }}
                        >
                            {todo?.title}
                        </Typography>
                        <Button onClick={() => handleEdit(todo?.id)} variant="contained" sx={{ ml: 10 }}>
                            Editar
                        </Button>
                        <Button onClick={() => onDelete(todo?.id)} color="secondary" variant="contained" sx={{ ml: 10 }}>
                            Deletar
                        </Button>
                    </ListItem>
                ))
            )}
        </List>
    )
}
