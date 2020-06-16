import React, { useEffect } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import Table from '../component/Table';


function useStores() {
  return React.useContext(MobXProviderContext)
}

function Main() {
  const { store } = useStores();

  useEffect(() => {
    store.locationStore.fetchLocationList();
  }, [store.locationStore, store.locationStore.location]);

  return (
    <div className="main-container">
      <div className="main__table--position">
        <Table />
      </div>
      <div className="main__button--position">
        <button className="button--style" onClick={() => store.authStore.signOut()}>Đăng xuất</button>
      </div>
    </div>
  );
}

export default observer(Main);
