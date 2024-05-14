import { useState } from 'react'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { Header } from '../../components'

export const Login = () => {
    const [checked, setChecked] = useState(true)
    const [inputTextError, setInputTextError] = useState('')

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    const handleInputChange = (event: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        const isValidEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(value)
        if (name === 'email' && !isValidEmail) {
            setInputTextError('Email inválido')
            return
        }
        setInputTextError('')
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(event, 'submit')
    }

    return (
        <Box
            sx={{
                backgroundColor: '#C6DDF0',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <Header title={'Entrar'} />
            <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center' }} component="form" onSubmit={handleSubmit}>
                <Paper sx={{ p: 4, minWidth: '250px', maxWidth: '30%' }}>
                    <Grid container sx={{ s: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                name={'email'}
                                onBlur={handleInputChange}
                                required
                                autoFocus
                                error={!!inputTextError}
                                helperText={inputTextError}
                                sx={{ mb: 2 }}
                            ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Senha" type={'password'} required></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        aria-label={'Mantenha-me conectado'}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label="Mantenha-me conectado"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth> Entrar </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Box>
    )
}
