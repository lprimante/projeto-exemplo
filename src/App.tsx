import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { TodosContextProvider } from './context'
import AppRoutes from './router'

function App() {
    return (
        <React.Suspense fallback={<h6>Loading Home</h6>}>
            <TodosContextProvider>
                <Router basename="/projeto-exemplo">
                    <AppRoutes />
                </Router>
            </TodosContextProvider>
        </React.Suspense>
    )
}

export default App
