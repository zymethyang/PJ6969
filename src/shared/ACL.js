import React, { useEffect } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';

function useStores() {
  return React.useContext(MobXProviderContext)
}

function ACL() {
  const { store } = useStores();

  useEffect(() => {
    store.authStore.fetchUserInfo();
  }, [store.authStore, store.authStore.userInfo.uid]);

  return (
    <div>
      {store.authStore.userInfo.uid}
    </div>
  )
}

export default observer(ACL);
