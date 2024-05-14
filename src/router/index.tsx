import { Routes, Route } from 'react-router-dom'
import { Home, Login, TodoModify } from '../pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="todo/:id" element={<TodoModify />} />
            <Route path="adiciona-todo" element={<TodoModify />} />
            <Route path="entrar" element={<Login />} />
        </Routes>
    )
}

export default AppRoutes
