import React, { FC } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { hospitalAdmin, superAdmin } from '../../router'

export const AppRouter:FC = () => {
    return (
        <Switch>
            {(localStorage.getItem('role') === '1' ? superAdmin : hospitalAdmin).map(r => <Route key={r.path} path={r.path} component={r.component} exact={r.exact}/>)}
            <Redirect to='/'/>
        </Switch>
    )
}
