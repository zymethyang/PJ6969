import React, { useEffect } from 'react';
import { MobXProviderContext } from 'mobx-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import Main from './page/Main';
import Add from './page/Add';
import Edit from './page/Edit';
import Login from './page/Login';
import ACL from './shared/ACL';
import './scss/styles.scss';

const MainPage = ACL(Main);
const AddPage = ACL(Add);
const EditPage = ACL(Edit);

function useStores() {
  return React.useContext(MobXProviderContext)
}

function App() {
  const { store } = useStores();
  useEffect(() => {
    store.authStore.fetchUserInfo();
  }, [store.authStore, store.authStore.userInfo.uid]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <MainPage />
        </Route >
        <Route path="/add">
          <AddPage />
        </Route>
        <Route path="/edit/:id" render={(props) => <EditPage {...props} />} />
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

