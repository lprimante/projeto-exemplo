import { TodosContextProvider } from './context'
import AppRoutes from './router'

function App() {
    return (
        <TodosContextProvider>
            <AppRoutes />
        </TodosContextProvider>
    )
}

export default App
