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

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const {isAuth} = useTypedSelector(state => state.auth)
  console.log(isAuth);
  
  const handleTrigger = () => {
      setCollapsed(!collapsed)
  }
  const {setUser, setIsAuth} = useActions();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            setUser({user_full_name: localStorage.getItem('name' || '')} as IUser)
            setIsAuth(true);
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
