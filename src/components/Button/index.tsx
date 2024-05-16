import { Button as MuiButton } from '@mui/material'

interface ButtonProps {
    onClick: () => void
    text: string
}

export const Button = ({ onClick, text }: ButtonProps) => {
    return (
        <MuiButton size="large" variant="contained" color="primary" onClick={onClick} sx={{ m: 10 }}>
            {text}
        </MuiButton>
    )
}
