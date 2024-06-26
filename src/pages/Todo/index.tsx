import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import { useTodos } from '../../hooks/useTodos'
import { TodosType } from '../../context'
import CircularProgress from '@mui/material/CircularProgress'

export const TodoModify = () => {
    const { getTodoById, saveTodo, seletedTodo } = useTodos()
    const { id } = useParams()
    const navigate = useNavigate()
    const isEdit = useMemo(() => !!id, [id])
    const [inputText, setInputText] = useState<string>()
    const [inputTodo, setInputTodo] = useState<TodosType>()

    useEffect(() => {
        if (isEdit && id) {
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log(event, 'submit')
        event.preventDefault()
        if (inputTodo) {
            await saveTodo(inputTodo)
            setInputText('')
        }
        navigate('/')
    }

    return isEdit && !seletedTodo ? (
        <CircularProgress />
    ) : (
        <Container>
            <Header title={isEdit ? 'Editar Minha Tarefa' : 'Criar Minha Tarefa'} />
            <Box component="form" onSubmit={handleSubmit} sx={{ my: 4, display: 'flex' }}>
                <TextField
                    variant="outlined"
                    onChange={onChange}
                    value={inputText}
                    autoFocus
                    defaultValue={inputText}
                    label="Escreva sua tarefa"
                    sx={{ mr: 2 }}
                />
                <Button
                    type="submit"
                    size="large"
                    variant={isEdit ? 'outlined' : 'contained'}
                    color="primary"
                    disabled={inputText ? false : true}
                >
                    {isEdit ? 'Editar Tarefa' : 'Adicionar Tarefa'}
                </Button>
            </Box>
        </Container>
    )
}
