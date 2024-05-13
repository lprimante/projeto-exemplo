import { useEffect, useMemo, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import { useTodos } from '../../hooks/useTodos'
import { TodosType } from 'context'
import CircularProgress from '@mui/material/CircularProgress'

interface ParamsType {
    id: string
}

export const TodoModify = () => {
    const { getTodoById, saveTodo, seletedTodo } = useTodos()
    const { id } = useParams<ParamsType>()
    const history = useHistory()
    const isEdit = useMemo(() => !!id, [id])
    const [inputText, setInputText] = useState<string>()
    const [inputTodo, setInputTodo] = useState<TodosType>()

    console.log('mudou de página - Todo')

    useEffect(() => {
        if (isEdit) {
            getTodoById(parseInt(id))
        }
    }, [isEdit])

    useEffect(() => {
        if (isEdit && seletedTodo) {
            setInputText(seletedTodo.title)
        }
    }, [isEdit, seletedTodo])

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
        if (seletedTodo) {
            setInputTodo({ ...seletedTodo, title: event.target.value })
        }
        setInputTodo({
            title: event.target.value,
            completed: false,
            userId: 1,
        })
    }

    const handleClick = async () => {
        if (inputTodo) {
            await saveTodo(inputTodo)
            setInputText('')
        }
        return history.push('/')
    }

    return isEdit && !seletedTodo ? (
        <CircularProgress />
    ) : (
        <Container>
            <Header title={isEdit ? 'Editar Minha Tarefa' : 'Criar Minha Tarefa'} />
            <Box sx={{ my: 4, display: 'flex' }}>
                <TextField
                    variant="outlined"
                    onChange={onChange}
                    value={inputText}
                    defaultValue={inputText}
                    label="Escreva sua tarefa"
                    sx={{ mr: 2 }}
                />
                <Button
                    size="large"
                    variant={isEdit ? 'outlined' : 'contained'}
                    color="primary"
                    onClick={handleClick}
                    disabled={inputText ? false : true}
                >
                    {isEdit ? 'Editar Tarefa' : 'Adicionar Tarefa'}
                </Button>
            </Box>
        </Container>
    )
}
