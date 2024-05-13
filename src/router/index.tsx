import { Route } from 'react-router-dom'
import { Home, Login, TodoModify } from '../pages'

const Routes = () => {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/todo/:id" exact component={TodoModify} />
            <Route path="/adiciona-todo" exact component={TodoModify} />
            <Route path="/entrar" exact component={Login} />
        </>
    )
}

export default Routes
