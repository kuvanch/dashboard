import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { superAdmin } from '../../router'

export const AppRouter:FC = () => {
    return (
        <Switch>
            { superAdmin.map(r => <Route key={r.path} path={r.path} component={r.component} exact={r.exact}/>)}
            <Redirect to='/'/>
        </Switch>
    )
}
