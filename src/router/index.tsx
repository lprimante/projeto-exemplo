import { Route } from 'react-router-dom'
import { Home } from '../pages'

const Routes = () => {
    return (
        <>
            <Route path="/">
                <Home />
            </Route>
        </>
    )
}

export default Routes
