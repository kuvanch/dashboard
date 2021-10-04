import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch,Route,Redirect } from 'react-router-dom';
import { AppRouter, ContentPage, HeaderPage, Sidebar } from './components';
import Layout from 'antd/lib/layout/layout';

import './App.css';
import 'antd/dist/antd.css';
import { Login } from './pages';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useActions } from './hooks/useActions';
import { IUser } from './interfaces';
import axios from 'axios';

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const {isAuth} = useTypedSelector(state => state.auth)
  const handleTrigger = () => {
      setCollapsed(!collapsed)
  }
  const {setUser, setIsAuth} = useActions();

    useEffect(() => {
        if(localStorage.getItem('token')) {
          axios({
            method: 'GET',
            url: 'http://164.90.163.79:3698/api/superAdmin/allAdmins',
            headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}
          }).then(res => {
              if(res.status === 200) {
                setIsAuth(true);
                setUser({user_full_name: localStorage.getItem('name' || '')} as IUser)
              }else if ([401,403].includes(res.status)) {
                localStorage.removeItem('token')
                localStorage.removeItem('role')
                setIsAuth(false)
              }
          })
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <>
        <BrowserRouter>
            {
              !isAuth ?
              <Switch>
                <Route path='/login' component={Login}/>
                <Redirect to='/login'/>
              </Switch>
              : 
              <Layout className='app'>
                <Sidebar collapsed={collapsed}/>
                <Layout className="site-layout">
                    <HeaderPage handleTrigger={handleTrigger} collapsed={collapsed}/>
                    <ContentPage>
                      <AppRouter/>
                    </ContentPage>
                </Layout>
              </Layout>
          }
        </BrowserRouter>
    </>
  );
}

export default App;
