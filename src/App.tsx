import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { TodosContextProvider } from './context'
import { Home, Login, TodoModify } from './pages'

function App() {
    return (
        <Router basename="/projeto-exemplo">
            <TodosContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="todo/:id" element={<TodoModify />} />
                    <Route path="adiciona-todo" element={<TodoModify />} />
                    <Route path="entrar" element={<Login />} />
                </Routes>
            </TodosContextProvider>
        </Router>
    )
}

export default App
