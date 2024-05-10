import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './router'

function App() {
    return (
        <Router>
            <Switch>
                <Routes />
            </Switch>
        </Router>
    )
}

export default App
