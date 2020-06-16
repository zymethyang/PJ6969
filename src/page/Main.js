import React, { useEffect } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { deleteDatabase } from '../shared/database';
import Table from '../component/Table';


function useStores() {
  return React.useContext(MobXProviderContext)
}

function Main() {
  const { store } = useStores();
  const history = useHistory();

  useEffect(() => {
    store.locationStore.fetchLocationList();
  }, [store.locationStore, store.locationStore.location]);

  return (
    <div className="main-container">
      <div className="main__table--position">
        <Table
          onPressDelete={(key) => deleteDatabase({ ref: `/location/${key}` })}
          onPressEdit={(key) => history.replace(`/edit/${key}`)}
        />
      </div>
      <div className="main__button--position">
        <button className="button--style" onClick={() => store.authStore.signOut()}>Đăng xuất</button>
      </div>
    </div>
  );
}

export default Main;
