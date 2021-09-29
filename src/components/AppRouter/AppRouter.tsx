import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { hospitalAdmin, superAdmin } from '../../router'

export interface IAppRouter {
    role?: number
}

export const AppRouter:FC<IAppRouter> = ({role}) => {
    const routes = false ? superAdmin : hospitalAdmin

    return (
            <Switch>
                {routes.map(r => <Route key={r.path} path={r.path} component={r.component} exact={r.exact}/>)}
                <Redirect to='/'/>
            </Switch>
    )
}
