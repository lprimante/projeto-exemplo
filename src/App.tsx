import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { TodosContextProvider } from './context'
import Routes from './router'

function App() {
    return (
        <Router basename="/projeto-exemplo">
            <TodosContextProvider>
                <Switch>
                    <Routes />
                </Switch>
            </TodosContextProvider>
        </Router>
    )
}

export default App
